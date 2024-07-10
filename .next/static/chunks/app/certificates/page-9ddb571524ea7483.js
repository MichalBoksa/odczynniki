(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[266],{

/***/ 10832:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23816))

/***/ }),

/***/ 23816:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);
/* harmony import */ var _lang_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41442);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const CerificatesSlider = ()=>{
    var _data;
    const { data } = (0,_lang_LocaleContext__WEBPACK_IMPORTED_MODULE_3__.useLocale)() || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "max-container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-ivory w-3/5 mr-auto ml-auto ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex justify-center mb-4 py-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: "text-secondary-content font-bold text-m lg:text-4xl",
                        children: (_data = data) === null || _data === void 0 ? void 0 : _data.OUR_CERTIFICATES
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "carousel w-full max-h-[600px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            id: "item1",
                            className: "carousel-item w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__/* .CldImage */ .bz, {
                                src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/jgnsjhoxomyio4unnl4b.jpg",
                                width: 400,
                                height: 600,
                                alt: "",
                                className: " mr-auto ml-auto"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            id: "item2",
                            className: "carousel-item w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__/* .CldImage */ .bz, {
                                src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/aub3f6kxlaap4mfgyjre.jpg",
                                width: 400,
                                height: 600,
                                alt: "",
                                className: "mr-auto ml-auto"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center w-full py-2 gap-2 mt-3 mb-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                            href: "#item1",
                            className: "btn btn-xs bg-cream",
                            children: "1"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                            href: "#item2",
                            className: "btn btn-xs bg-cream",
                            children: "2"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (CerificatesSlider);


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
/******/ __webpack_require__.O(0, [202,971,596,744], function() { return __webpack_exec__(10832); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);