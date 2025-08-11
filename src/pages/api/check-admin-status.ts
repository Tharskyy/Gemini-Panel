import type { APIRoute } from 'astro';
import { getUserByEmail } from '../../lib/db';

export const GET: APIRoute = async ({ request }) => {
  try {
    // Get the email from the session or request
    const email = request.headers.get('x-user-email');
    
    if (!email) {
      return new Response(JSON.stringify({ isAdmin: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get user from database
    const user = await getUserByEmail(email);
    
    if (!user) {
      return new Response(JSON.stringify({ isAdmin: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if user is admin by comparing with environment variables
    const isAdmin = email === import.meta.env.ADMIN_EMAIL;

    return new Response(JSON.stringify({ isAdmin }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error checking admin status:', error);
    return new Response(JSON.stringify({ isAdmin: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 