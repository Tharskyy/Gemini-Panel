import type { APIRoute } from 'astro';
import { serialize } from 'cookie';

export const POST: APIRoute = async () => {
  // Clear the user_email cookie
  const cookie = serialize('user_email', '', {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 0, // Expire immediately
    secure: false // Changed to false for development
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Set-Cookie': cookie,
      'Content-Type': 'application/json'
    }
  });
}; 