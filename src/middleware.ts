import { defineMiddleware } from 'astro:middleware';

const validRoutes = ['/', '/signin', '/signin/2fa', '/panel', '/api'];
const spoofParams = '?client_id=186690b1-94fe-4608-94dea-d35bee334e718&locale=en&oauth_challenge=186690b1-94fe-4608-94dea-d35bee334e718';

export const onRequest = defineMiddleware(async (context, next) => {
  const userEmail = context.cookies.get('user_email')?.value;
  const path = context.url.pathname;
  const isValidRoute = validRoutes.some(route => path.startsWith(route));

  if (!isValidRoute) {
    return context.redirect('/404');
  }

  // Get signin URL with optional spoofed params
  const getSigninUrl = () => {
    const shouldSpoof = import.meta.env.SPOOF_URL_PARAMS === 'true';
    return shouldSpoof ? `/signin${spoofParams}` : '/signin';
  };

  // Redirect 2FA attempts to signin/2fa
  if (path === '/2fa') {
    return context.redirect('/signin/2fa');
  }

  if (path === '/') {
    return context.redirect(getSigninUrl());
  }

  if (path === '/panel') {
    if (!userEmail || userEmail !== import.meta.env.ADMIN_EMAIL) {
      return context.redirect(getSigninUrl());
    }
  }

  return next();
});