"use strict";
(() => {
var exports = {};
exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 59283:
/***/ ((module) => {

module.exports = require("lodash/at");

/***/ }),

/***/ 20770:
/***/ ((module) => {

module.exports = require("lodash/clone");

/***/ }),

/***/ 39131:
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ 48390:
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ 9368:
/***/ ((module) => {

module.exports = require("lodash/filter");

/***/ }),

/***/ 22265:
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ 41238:
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ 35599:
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 25716:
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ 27078:
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 15452:
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ 97026:
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ 53707:
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ 11516:
/***/ ((module) => {

module.exports = require("lodash/take");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 70607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/sign-cloudinary-params/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/cloudinary/cloudinary.js
var cloudinary = __webpack_require__(15939);
;// CONCATENATED MODULE: ./app/api/sign-cloudinary-params/route.ts

cloudinary.v2.config({
    cloud_name: "dozgr1muo",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET ?? ""
});
async function POST(request) {
    const body = await request.json();
    const { paramsToSign } = body;
    const signature = cloudinary.v2.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET ?? "");
    return Response.json({
        signature
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsign-cloudinary-params%2Froute&name=app%2Fapi%2Fsign-cloudinary-params%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsign-cloudinary-params%2Froute.ts&appDir=C%3A%5CUsers%5CMichal%5CDesktop%5Codczynniki%5Cmidas%5Capp&appPaths=%2Fapi%2Fsign-cloudinary-params%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/sign-cloudinary-params/route",
        pathname: "/api/sign-cloudinary-params",
        filename: "route",
        bundlePath: "app/api/sign-cloudinary-params/route"
    },
    resolvedPagePath: "C:\\Users\\Michal\\Desktop\\odczynniki\\midas\\app\\api\\sign-cloudinary-params\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/sign-cloudinary-params/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,939], () => (__webpack_exec__(70607)));
module.exports = __webpack_exports__;

})();