import { i as initializeDb, g as getUserByEmail, a as getAllUsers, u as updateUser, d as deleteAllUsers } from '../../chunks/db__92qgssi.mjs';
export { renderers } from '../../renderers.mjs';

initializeDb();
const GET = async ({ url, cookies }) => {
  try {
    const email = url.searchParams.get("email");
    const userEmail = cookies.get("user_email")?.value;
    const isAdmin = userEmail === "admin@gmail.com";
    if (email) {
      if (!isAdmin && userEmail !== email) {
        return new Response(JSON.stringify({ error: "Unauthorized - You can only access your own user data" }), {
          status: 403,
          headers: { "Content-Type": "application/json" }
        });
      }
      const user = await getUserByEmail(email);
      if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const users = await getAllUsers();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const PUT = async ({ request }) => {
  try {
    const { email, ...updates } = await request.json();
    await updateUser(email, updates);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ error: "Failed to update user" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const DELETE = async ({ cookies }) => {
  try {
    const userEmail = cookies.get("user_email")?.value;
    const isAdmin = userEmail === "admin@gmail.com";
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    await deleteAllUsers("admin@gmail.com");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error deleting all users:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
