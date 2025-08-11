import { c as createComponent, a as createAstro, m as maybeRenderHead, e as renderSlot, r as renderTemplate } from './astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$AuthCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthCard;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="auth-card-container" data-astro-cid-wqncrgt5> <div class="auth-card" data-astro-cid-wqncrgt5> ${title && renderTemplate`<h2 data-astro-cid-wqncrgt5>${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/components/AuthCard.astro", void 0);

export { $$AuthCard as $ };
