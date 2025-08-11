import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIPLtU9Y.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - Page Not Found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="error-container" data-astro-cid-zetdm5md> <div class="error-content" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <h2 data-astro-cid-zetdm5md>Page Not Found</h2> <p data-astro-cid-zetdm5md>The page you're looking for doesn't exist or has been moved.</p> <a href="/" class="return-home" data-astro-cid-zetdm5md>Return to Home</a> </div> </div> ` })} `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/pages/404.astro", void 0);

const $$file = "C:/Users/coold/Desktop/panels/gemini.com/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
