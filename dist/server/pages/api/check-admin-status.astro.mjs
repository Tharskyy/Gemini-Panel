import { g as getUserByEmail } from '../../chunks/db__92qgssi.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const email = request.headers.get("x-user-email");
    if (!email) {
      return new Response(JSON.stringify({ isAdmin: false }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = await getUserByEmail(email);
    if (!user) {
      return new Response(JSON.stringify({ isAdmin: false }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const isAdmin = email === "admin@gmail.com";
    return new Response(JSON.stringify({ isAdmin }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error checking admin status:", error);
    return new Response(JSON.stringify({ isAdmin: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
