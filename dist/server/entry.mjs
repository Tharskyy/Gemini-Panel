import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B_THN78G.mjs';
import { manifest } from './manifest_BF9codZL.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/auth/logout.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/check-admin-status.astro.mjs');
const _page5 = () => import('./pages/api/users.astro.mjs');
const _page6 = () => import('./pages/balance.astro.mjs');
const _page7 = () => import('./pages/email.astro.mjs');
const _page8 = () => import('./pages/panel.astro.mjs');
const _page9 = () => import('./pages/reset.astro.mjs');
const _page10 = () => import('./pages/seed.astro.mjs');
const _page11 = () => import('./pages/signin/2fa.astro.mjs');
const _page12 = () => import('./pages/signin.astro.mjs');
const _page13 = () => import('./pages/wait.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/auth/logout.ts", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/check-admin-status.ts", _page4],
    ["src/pages/api/users.ts", _page5],
    ["src/pages/balance.astro", _page6],
    ["src/pages/email.astro", _page7],
    ["src/pages/panel.astro", _page8],
    ["src/pages/reset.astro", _page9],
    ["src/pages/seed.astro", _page10],
    ["src/pages/signin/2fa.astro", _page11],
    ["src/pages/signin.astro", _page12],
    ["src/pages/wait.astro", _page13]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/coold/Desktop/panels/gemini.com/dist/client/",
    "server": "file:///C:/Users/coold/Desktop/panels/gemini.com/dist/server/",
    "host": true,
    "port": 3000,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
