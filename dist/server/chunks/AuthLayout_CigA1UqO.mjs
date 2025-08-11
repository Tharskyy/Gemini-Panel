import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, e as renderSlot } from './astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BIPLtU9Y.mjs';

const $$Astro = createAstro();
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": Astro2.props.title }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/layouts/AuthLayout.astro", void 0);

export { $$AuthLayout as $ };
