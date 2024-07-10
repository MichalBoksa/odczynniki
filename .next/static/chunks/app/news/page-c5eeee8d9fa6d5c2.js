(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[834],{

/***/ 71504:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 32818))

/***/ }),

/***/ 32818:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_News; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next-cloudinary/dist/index.mjs + 47 modules
var dist = __webpack_require__(74915);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(61396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NewsCardElement.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const NewsCardElement = (post, recentPosts)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: "/news/".concat(post.post.slug),
        children: [
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex mt-7 items-center justify-center gap-8 ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* CldImage */.bz, {
                                src: post.post.img,
                                width: 350,
                                height: 300,
                                alt: "post image",
                                className: "object-cover rounded-lg"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: " flex-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-gray-400",
                                    children: post.post.createdAt.toString().substring(0, 10)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "font-bold text-xl mb-6 text-left",
                                    children: post.post.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "px-20",
                                    dangerouslySetInnerHTML: {
                                        __html: post.post.desc.substring(0, 120).concat(" . . .")
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    className: "flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 mb-3 ml-auto",
                                    children: "Czytaj więcej"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "border-b-2 border-b-gray-300 w-9/10"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var components_NewsCardElement = (NewsCardElement);

// EXTERNAL MODULE: ./lang/LocaleContext.tsx + 1 modules
var LocaleContext = __webpack_require__(41442);
;// CONCATENATED MODULE: ./components/NewsCardList.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const NewsCardList = (posts)=>{
    var _data;
    if (!Array.isArray(posts.posts)) {
        return null; // or handle the error in an appropriate way
    }
    const { data } = (0,LocaleContext.useLocale)() || {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "max-container padding-container mt-16",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "font-bold text-4xl",
                children: (_data = data) === null || _data === void 0 ? void 0 : _data.LATEST_NEWS
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "posts",
                children: posts.posts.map((postItem)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(components_NewsCardElement, {
                        post: postItem,
                        recentPosts: posts.posts
                    }, postItem.id))
            })
        ]
    });
};
/* harmony default export */ var components_NewsCardList = (NewsCardList);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(24033);
;// CONCATENATED MODULE: ./components/Pagination/Pagination.tsx



const Pagination = (param)=>{
    let { page, hasPrevious, hasNext } = param;
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex justify-around mt-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: "w-24 p-2 text-sm bg-primary text-ivory cursor-pointer disabled:cursor-not-allowed disabled:bg-dark-gray",
                disabled: !hasPrevious,
                onClick: ()=>router.push("?page=".concat(page - 1)),
                children: "Poprzednia"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: "w-24 p-2 text-sm bg-primary text-ivory cursor-pointer disabled:cursor-not-allowed disabled:bg-dark-gray",
                disabled: !hasNext,
                onClick: ()=>router.push("?page=".concat(page + 1)),
                children: "Następna"
            })
        ]
    });
};
/* harmony default export */ var Pagination_Pagination = (Pagination);

;// CONCATENATED MODULE: ./components/News.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const News = (param)=>{
    let { posts, page, count } = param;
    var _data, _data1;
    const latestPost = posts[0];
    const POST_PER_PAGE = 3;
    const hasPrevious = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * page < count;
    const { data } = (0,LocaleContext.useLocale)() || {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "max-container padding-container mb-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "font-bold text-6xl",
                children: (_data = data) === null || _data === void 0 ? void 0 : _data.NEWS
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/news/".concat(latestPost.slug),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex mt-6 items-center gap-8 min-h-[600px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1",
                            children: latestPost && /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* CldImage */.bz, {
                                className: "rounded-lg min-h-[450px] object-cover",
                                src: latestPost.img,
                                alt: "img",
                                width: 600,
                                height: 450,
                                crop: {
                                    type: "auto",
                                    source: true
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                latestPost && /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "font-bold text-xl mb-6 text-left",
                                    children: latestPost.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "px-20",
                                    dangerouslySetInnerHTML: {
                                        __html: latestPost.desc.substring(0, 120).concat(" . . .")
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    className: "flex btn btn-primary btn-sm text-cream rounded-lg items-center mt-3 ml-auto",
                                    children: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.READ_MORE
                                })
                            ]
                        })
                    ]
                })
            }),
            page && page > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_NewsCardList, {
                posts: posts.slice(1)
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(components_NewsCardList, {
                posts: posts.slice(2)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Pagination_Pagination, {
                page: page,
                hasPrevious: hasPrevious,
                hasNext: hasNext
            })
        ]
    });
};
/* harmony default export */ var components_News = (News);


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
/******/ __webpack_require__.O(0, [202,396,971,596,744], function() { return __webpack_exec__(71504); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);