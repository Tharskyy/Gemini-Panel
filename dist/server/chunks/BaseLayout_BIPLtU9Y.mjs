import { c as createComponent, a as createAstro, b as addAttribute, g as renderHead, e as renderSlot, r as renderTemplate } from './astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Iconify Script --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">${renderHead()}</head> <body class="page-body SignInScreen" cz-shortcut-listen="true"> <div id="container"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
