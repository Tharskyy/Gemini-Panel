import { serialize } from 'cookie';
export { renderers } from '../../../renderers.mjs';

const POST = async () => {
  const cookie = serialize("user_email", "", {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 0,
    // Expire immediately
    secure: false
    // Changed to false for development
  });
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
