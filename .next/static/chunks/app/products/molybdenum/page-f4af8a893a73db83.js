(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[388],{

/***/ 59556:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27369))

/***/ }),

/***/ 27369:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var _lang_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41442);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const MolybdenumInfo = ()=>{
    var _data, _data1, _data2, _data3;
    const { data } = (0,_lang_LocaleContext__WEBPACK_IMPORTED_MODULE_1__.useLocale)() || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "max-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "text-8xl w-full mb-10",
                children: (_data = data) === null || _data === void 0 ? void 0 : _data.MOLYBDENUM
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-12 w-full mb-20 mt-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-1 flex-col card w-96 h-60 ml-4 mb-6 bg-base-100 border-primary border-2 items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                        className: "text-xl",
                                        children: "42"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-primary text-8xl font-bold",
                                        children: "Mo"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "flex w-full card-actions mr-8 justify-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-xl ",
                                    children: "95.95"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex-2 flex mt-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "px-10 font-normal text-lg",
                            children: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.MOLYBDENUM_DESC
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col rounded border-solid border-2 border-base-200 max-container padding-container py-4 mb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex mt-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                            className: "text-xl md:text-4xl mr-auto ml-auto font-semibold text-gray-400 text-center lg:mb-8 mb-4 tracking-wider",
                            children: (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.OUR_PRODUCTS
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex flex-col gap-10 mt-6 pb-3",
                        children: (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.MOLYBDENUM_PRODUCTS.map((product, index)=>{
                            var _data, _data1;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-7 items-center justify-center ".concat(index !== ((_data = data) === null || _data === void 0 ? void 0 : _data.MOLYBDENUM_PRODUCTS.length) - 1 ? "border-b-2 border-b-gray-300 pb-8" : ""),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "flex card w-48 h-20 bg-base-100 border-primary border-2 justify-center items-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "text-neutral font-light text-lg",
                                                children: product.symbol
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-1 flex-col items-start justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                                className: "text-xl font-semibold",
                                                children: product.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                children: [
                                                    "CAS: ",
                                                    product.cas
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-1 flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                                className: "text-xl font-semibold mb-2",
                                                children: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.USAGE
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", {
                                                    className: "list-disc ml-7",
                                                    children: product.use.map((use, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                            className: "text-base ",
                                                            children: use
                                                        }, index))
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, product.symbol);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (MolybdenumInfo);


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

/***/ 30622:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(2265),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 57437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(30622);
} else {}


/***/ }),

/***/ 24033:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(68165)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [971,596,744], function() { return __webpack_exec__(59556); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);