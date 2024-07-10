(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 94923:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61792));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31823))

/***/ }),

/***/ 31823:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);
/* harmony import */ var _lang_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41442);
/* __next_internal_client_entry_do_not_use__ default auto */ 
//import { COMPANY_INFO, PRODUCTS } from '@/constants'



const CompanyInfo = ()=>{
    var _data, _data1, _data2, _data3;
    const { data } = (0,_lang_LocaleContext__WEBPACK_IMPORTED_MODULE_3__.useLocale)() || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: "mt-4 flex",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col md:flex-row items-center max-container padding-container relative z-30",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex  flex-1 flex-col justify-center items-start md:w-3/5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                            className: "text-3xl md:text-4xl mr-auto ml-auto font-semibold text-primary text-center lg:mb-8 mb-4 tracking-wider",
                            children: (_data = data) === null || _data === void 0 ? void 0 : _data.WHO_ARE_WE
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "text-sm md:text-base text-left font-semibold py-3 px-2 tracking-wider",
                            children: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.COMPANY_INFO
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col flex-1 justify-center items-center mt-6 md:mt-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-xl md:text-2xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-4 mb-4 tracking-wider",
                                children: [
                                    " ",
                                    (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.OUR_PRODUCTS
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "flex flex-wrap justify-center items-start mt-4 lg:w-[80%] px-20 md:px-10 lg:px-5",
                            children: (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.PRODUCTS.map((product, index)=>product.symbol === "" ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "card w-20 h-16 ml-4 mb-6 bg-base-100  border-primary border-2 items justify-center items-center hover:bg-dark-white cursor-pointer",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: product.href,
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                        className: "text-neutral font-light text-2xl",
                                                        children: product.symbol
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-xs",
                                                        children: product.name
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, product.symbol))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (CompanyInfo);


/***/ }),

/***/ 61792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74915);
/* harmony import */ var _lang_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41442);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Slider = ()=>{
    var _data, _data1;
    const { data } = (0,_lang_LocaleContext__WEBPACK_IMPORTED_MODULE_3__.useLocale)() || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: "flex",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "carousel w-full max-h-[600px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "slide1",
                    className: "carousel-item relative w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_2__/* .CldImage */ .bz, {
                            src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/lbi5sg9al1hjcjuhdxys.png",
                            className: "w-full object-fill z-5",
                            alt: "",
                            height: 1020,
                            width: 1900
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "w-full absolute text-accent font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl justify-center items-center z-10 tracking-wider",
                            style: {
                                top: "20%",
                                left: "5%",
                                transform: "translateY(-50%)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                className: "drop-shadow-md",
                                children: (_data = data) === null || _data === void 0 ? void 0 : _data.SLIDER_TITLE
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                    href: "#slide2",
                                    className: "btn btn-circle",
                                    children: "❮"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                    href: "#slide2",
                                    className: "btn btn-circle",
                                    children: "❯"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "slide2",
                    className: "carousel-item relative w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_2__/* .CldImage */ .bz, {
                            src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/hk5a68trk9tu0ioordbf.jpg",
                            className: "w-full object-fill z-5",
                            alt: "",
                            height: 1020,
                            width: 1900
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "w-full absolute text-accent font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl justify-center items-center z-10 tracking-wider",
                            style: {
                                top: "20%",
                                left: "5%",
                                transform: "translateY(-50%)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                className: "",
                                children: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.SLIDER_TITLE
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                    href: "#slide1",
                                    className: "btn btn-circle",
                                    children: "❮"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                    href: "#slide1",
                                    className: "btn btn-circle",
                                    children: "❯"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);


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
/******/ __webpack_require__.O(0, [202,396,971,596,744], function() { return __webpack_exec__(94923); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);