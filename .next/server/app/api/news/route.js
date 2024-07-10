"use strict";
(() => {
var exports = {};
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 45848:
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

// NAMESPACE OBJECT: ./app/api/news/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./utils/connect.ts + 1 modules
var connect = __webpack_require__(7102);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./app/api/news/route.ts


const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const POST_PER_PAGE = 3;
    const skip = (parseInt(page) - 1) * POST_PER_PAGE;
    try {
        const firstPost = await connect/* default */.Z.post.findFirst({
            orderBy: {
                createdAt: "desc"
            }
        });
        const paginatedPosts = await connect/* default */.Z.post.findMany({
            take: POST_PER_PAGE,
            skip,
            orderBy: {
                createdAt: "desc"
            }
        });
        const posts = [
            firstPost,
            ...paginatedPosts
        ];
        const count = await connect/* default */.Z.post.count();
        return new next_response/* default */.Z(JSON.stringify({
            posts,
            count
        }), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Something went wrong while fetching posts routes"
        }), {
            status: 500
        });
    }
};
const POST = async (req)=>{
    // const session = await getSession();
    // console.log(session);
    // if (!session) {
    //   return new NextResponse(
    //     JSON.stringify({ message: 'Unauthorized' }),
    //     { status: 401 }
    //   );
    // }
    try {
        const body = await req.json();
        const post = await connect/* default */.Z.post.create({
            data: {
                ...body
            }
        });
        return new next_response/* default */.Z(JSON.stringify(post), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new next_response/* default */.Z(JSON.stringify({
            message: "Something went wrong while creating post"
        }), {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fnews%2Froute&name=app%2Fapi%2Fnews%2Froute&pagePath=private-next-app-dir%2Fapi%2Fnews%2Froute.ts&appDir=C%3A%5CUsers%5CMichal%5CDesktop%5Codczynniki%5Cmidas%5Capp&appPaths=%2Fapi%2Fnews%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/news/route",
        pathname: "/api/news",
        filename: "route",
        bundlePath: "app/api/news/route"
    },
    resolvedPagePath: "C:\\Users\\Michal\\Desktop\\odczynniki\\midas\\app\\api\\news\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/news/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 7102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ connect)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./utils/connect.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const connect = (prisma);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,335], () => (__webpack_exec__(45848)));
module.exports = __webpack_exports__;

})();