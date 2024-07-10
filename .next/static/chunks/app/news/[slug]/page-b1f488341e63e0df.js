(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[329],{

/***/ 31210:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30232))

/***/ }),

/***/ 30232:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_SingleNewsPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next-cloudinary/dist/index.mjs + 47 modules
var dist = __webpack_require__(74915);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(61396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./lang/LocaleContext.tsx + 1 modules
var LocaleContext = __webpack_require__(41442);
;// CONCATENATED MODULE: ./components/RecentPosts.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const RecentPosts = (param)=>{
    let { recentPosts } = param;
    var _data;
    const { data } = (0,LocaleContext.useLocale)() || {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col mt-12 mb-16",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "font-semibold text-md",
                children: (_data = data) === null || _data === void 0 ? void 0 : _data.LATEST_NEWS2
            }),
            recentPosts.map((postItem)=>/*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                    href: "/news/".concat(postItem.slug),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-8 mt-3 border-b-2 border-b-accent pb-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "relative flex border-1 object-cover",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* CldImage */.bz, {
                                    className: "rounded-3xl aspect-square",
                                    width: 40,
                                    height: 40,
                                    src: postItem.img,
                                    alt: "contact-bg"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm",
                                children: postItem.title
                            })
                        ]
                    })
                }, postItem.id))
        ]
    });
};
/* harmony default export */ var components_RecentPosts = (RecentPosts);

;// CONCATENATED MODULE: ./components/SingleNewsPage.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SingleNewsPage = (param)=>{
    let { posts } = param;
    const firstPost = posts[0];
    const recentPostsData = posts.slice(1);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "max-container padding-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-12 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* CldImage */.bz, {
                            src: firstPost.img,
                            alt: "",
                            width: 650,
                            height: 400,
                            className: "rounded cover"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex-1 ",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                            className: "mt-10 text-gray-500 text-4xl",
                            children: firstPost.title
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-12 mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "mt-20 px-14 lg:px-20 mb-4 w-4/5",
                        dangerouslySetInnerHTML: {
                            __html: firstPost.desc
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_RecentPosts, {
                        recentPosts: recentPostsData
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var components_SingleNewsPage = (SingleNewsPage);


/***/ }),

/***/ 41442:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LocaleProvider: function() { return /* binding */ LocaleProvider; },
  useLocale: function() { return /* binding */ useLocale; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(24033);
;// CONCATENATED MODULE: ./lang/i18n.js
const localesData = {
    en: ()=>__webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(__webpack_require__, 43037)),
    fr: ()=>__webpack_require__.e(/* import() */ 847).then(__webpack_require__.bind(__webpack_require__, 4847)),
    pl: ()=>__webpack_require__.e(/* import() */ 120).then(__webpack_require__.bind(__webpack_require__, 46120)),
    de: ()=>__webpack_require__.e(/* import() */ 811).then(__webpack_require__.bind(__webpack_require__, 44811)),
    ru: ()=>__webpack_require__.e(/* import() */ 576).then(__webpack_require__.bind(__webpack_require__, 84576))
};
async function getLocaleData(locale) {
    const data = await localesData[locale]();
    return data;
}

;// CONCATENATED MODULE: ./lang/LocaleContext.tsx
/* __next_internal_client_entry_do_not_use__ LocaleProvider,useLocale auto */ 



const LocaleContext = /*#__PURE__*/ (0,react.createContext)({
    data: null,
    setLocale: ()=>{},
    currentLocale: "pl"
});
const LocaleProvider = (param)=>{
    let { children } = param;
    const router = (0,navigation.useRouter)(); // Update the type of 'router' to 'any'
    const { locale, defaultLocale, pathname, asPath, query } = router;
    const [data, setData] = (0,react.useState)(null);
    const [currentLocale, setCurrentLocale] = (0,react.useState)(locale || defaultLocale || "pl");
    (0,react.useEffect)(()=>{
        async function loadData() {
            if (currentLocale) {
                const localeData = await getLocaleData(currentLocale);
                setData(localeData);
            }
        }
        loadData();
    }, [
        currentLocale
    ]);
    const setLocale = (newLocale)=>{
        setCurrentLocale(newLocale);
        // Check if pathname is defined. If not, default to '/' or handle as needed.
        const safePathname = pathname || "/";
        const queryString = new URLSearchParams(query).toString();
        const newPath = queryString ? "".concat(safePathname, "?").concat(queryString) : safePathname;
        const pushResult = router.push(newPath, asPath, {
            locale: newLocale
        });
        if (pushResult && typeof pushResult.then === "function") {
            pushResult.catch(console.error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LocaleContext.Provider, {
        value: {
            data,
            setLocale,
            currentLocale
        },
        children: children
    });
};
const useLocale = ()=>(0,react.useContext)(LocaleContext);


/***/ }),

/***/ 24033:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(68165)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [202,396,971,596,744], function() { return __webpack_exec__(31210); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);