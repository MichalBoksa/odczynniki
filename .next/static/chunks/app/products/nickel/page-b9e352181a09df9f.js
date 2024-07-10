(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[528],{

/***/ 80824:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15359))

/***/ }),

/***/ 15359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59611);
/* harmony import */ var _lang_LocaleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41442);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const NickelInfo = ()=>{
    var _data, _data1, _data2;
    const { data } = (0,_lang_LocaleContext__WEBPACK_IMPORTED_MODULE_2__.useLocale)() || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "max-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "text-8xl w-full mb-10",
                children: (_data = data) === null || _data === void 0 ? void 0 : _data.NICKEL
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
                                        children: "28"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-primary text-8xl font-bold",
                                        children: "Ni"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "flex w-full card-actions mr-8 justify-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-xl ",
                                    children: "58.59"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex-2 flex mt-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "px-10 font-normal text-lg",
                            children: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.NICKEL_DESC
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
                        children: _constants__WEBPACK_IMPORTED_MODULE_1__/* .NICKEL_PRODUCTS_PL */ .pv.map((product, index)=>{
                            var _data;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-7 items-center justify-center ".concat(index !== _constants__WEBPACK_IMPORTED_MODULE_1__/* .NICKEL_PRODUCTS_PL */ .pv.length - 1 ? "border-b-2 border-b-gray-300 pb-8" : ""),
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
                                                children: (_data = data) === null || _data === void 0 ? void 0 : _data.USAGE
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
/* harmony default export */ __webpack_exports__["default"] = (NickelInfo);


/***/ }),

/***/ 59611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EC: function() { return /* binding */ SETTLEMENT_TEAM; },
/* harmony export */   a2: function() { return /* binding */ LANGUAGES; },
/* harmony export */   pT: function() { return /* binding */ TRADE_TEAM; },
/* harmony export */   pv: function() { return /* binding */ NICKEL_PRODUCTS_PL; }
/* harmony export */ });
/* unused harmony exports NAV_LINKS, COMPANY_INFO_PL, PRODUCTS_PL, MOLYBDENUM_PRODUCTS_PL, SELENIUM_PRODUCTS_PL, COBALT_PRODUCTS_PL, COPPER_PRODUCTS_PL, ZINC_PRODUCTS_PL, MANGANESE_PRODUCTS_PL, OTHER_PRODUCTS_PL */
// NAVIGATION
const NAV_LINKS = [
    {
        href: "/aboutUs",
        key: "aboutUs",
        label: "O NAS"
    },
    {
        href: "/products",
        key: "products",
        label: "NASZE PRODUKTY"
    },
    {
        href: "/careers",
        key: "careers",
        label: "KARIERA"
    },
    {
        href: "/news",
        key: "news ",
        label: "AKTUALNOŚCI"
    },
    {
        href: "/contactUs",
        key: "contact_us",
        label: "KONTAKT"
    },
    {
        href: "/euFunds",
        key: "euFunds",
        label: "FUNDUSZE EUROPEJSKIE"
    }
];
const LANGUAGES = [
    {
        code: "en",
        label: "EN"
    },
    {
        code: "pl",
        label: "PL"
    },
    {
        code: "fr",
        label: "FR"
    },
    {
        code: "de",
        label: "DE"
    },
    {
        code: "ru",
        label: "RU"
    }
];
//HOME COMPANY INFO 
const COMPANY_INFO_PL = "Jesteśmy firmą produkującą związki chemiczne, dedykowane dla firm aplikujących je do takich branż przemysłu jak produkcja szkła, dodatki do premix\xf3w paszowych, nawoz\xf3w, uzdatniania wody, pigment\xf3w, katalizator\xf3w, branży galwanicznej a także og\xf3lnego zastosowania chemicznego. Cały czas umacniamy swoją pozycję wiodącej firmy chemicznej produkującej sole metali na rynku światowym. Osiągamy to dzięki umocnieniu długoterminowych relacji biznesowych";
//PRODUCTS
const PRODUCTS_PL = [
    {
        symbol: "Zn",
        name: "Cynk",
        href: "/products/zinc"
    },
    {
        symbol: "Mn",
        name: "Mangan",
        href: "/products/manganese"
    },
    {
        symbol: "Cu",
        name: "Miedź",
        href: "/products/copper"
    },
    {
        symbol: "Mo",
        name: "Molibden",
        href: "/products/molybdenum"
    },
    {
        symbol: "Ni",
        name: "Nikiel",
        href: "/products/nickel"
    },
    {
        symbol: "Se",
        name: "Selen",
        href: "/products/selenium"
    },
    {
        symbol: "Co",
        name: "Kobalt",
        href: "/products/cobalt"
    },
    {
        symbol: "",
        name: "Pozostałe",
        href: "/products/other"
    },
    {
        symbol: "",
        name: "Certyfikaty",
        href: "/certificates"
    }
];
//Molybdenum products
const MOLYBDENUM_PRODUCTS_PL = [
    {
        name: "Sodu Molibdenian",
        symbol: "Na₂MoO₄",
        cas: "7631-95-0",
        use: [
            "dodatek do pasz dla zwierząt",
            "przemysł nawozowy",
            "pigmenty",
            "uzdatnianie wody",
            "inhibitor korozji",
            "środek przeciw zamarzaniu i chłodziwa do silnik\xf3w"
        ]
    },
    {
        name: "Amonu Heptamolibdenian",
        cas: "12054-85-2",
        symbol: "(NH₄)₆Mo₇O₂₄\xb74H₂O",
        use: [
            "przemysł nawozowy",
            "katalizator",
            "inhibitor korozji",
            "chemia analityczna"
        ]
    },
    {
        name: "Amonu Dimolibdenian ",
        symbol: "(NH₄)₂Mo₂O₇",
        cas: "27546-07-2",
        use: [
            "pigmenty",
            "produkcja katalizator\xf3w",
            "op\xf3źniacze spalania",
            "środki przeciwdziałające pożarom"
        ]
    }
];
//Selenium products
const SELENIUM_PRODUCTS_PL = [
    {
        name: "Sodu Selenin",
        symbol: "Na₂SeO₃",
        cas: "10102-18-8",
        use: [
            "dodatek do pasz dla zwierząt",
            "nawozy",
            "odczynniki do odbarwiania szkła"
        ]
    },
    {
        name: "Cynku Selenin",
        symbol: "ZnSeO₃",
        cas: "13597-46-1",
        use: [
            "dodatek do szkła",
            "odczynniki chemiczne"
        ]
    },
    {
        name: "Premixy 1% - 10%",
        symbol: "Na₂SeO₃/CaMg(CO₃)₂",
        cas: "10102-18-8",
        use: [
            "dodatek do pasz dla zwierząt",
            "wchodzi w skład substancji budulcowych",
            "bierze udział w mechanizmach antyoksydacyjnych",
            "ma wpływ na metabolizm i odporność organizmu zwierząt",
            "rolnictwo"
        ]
    }
];
//Cobalt products
const COBALT_PRODUCTS_PL = [
    {
        name: "Powlekany Granulowany Węglan Kobaltu - Co 1-5% ",
        symbol: "CoCO₃/CaMg(CO₃)₂",
        cas: "513-79-1",
        use: [
            "dodatek do pasz",
            "jego występowanie w organizmie zwierząt jest związane z witaminą B12, a rola kobaltu wiąże się ściśle z występowaniem tej witaminy"
        ]
    }
];
//Nickel products
const NICKEL_PRODUCTS_PL = [
    {
        name: "Niklu Azotan",
        symbol: "Ni(NO₃)₂",
        cas: "13138-45-9",
        use: [
            "produkcja baterii",
            "katalizatory",
            "odczynniki chemiczne",
            "galwaniczne (niklowanie)"
        ]
    },
    {
        name: "Niklu Chlorek",
        symbol: "NiCl₂•6H₂O",
        cas: "7791-20-0",
        use: [
            "farby",
            "lakiery"
        ]
    },
    {
        name: "Niklu Siarczan",
        symbol: "NiSO₄•6H₂O",
        cas: "10101-97-0",
        use: [
            "dodatek do produkcji biogazu",
            "dodatek do szkła",
            "pigmenty",
            "galwanizacja",
            "do produkcji baterii"
        ]
    }
];
//Copper products
const COPPER_PRODUCTS_PL = [
    {
        name: "Miedzi Azotan",
        symbol: "Cu(NO₃)₂",
        cas: "3251-23-8",
        use: [
            "nawozy",
            "katalizatory",
            "galwaniczne",
            "pigmenty",
            "obr\xf3bka powierzchni niemetalowych"
        ]
    },
    {
        name: "Miedzi Chlorek",
        symbol: "CuCl₂",
        cas: "7447-39-4",
        use: [
            "przemysł chemiczny",
            "nawozy",
            "odczynniki do analiz",
            "jako katalizator w chemii organicznej"
        ]
    },
    {
        name: "Miedzi Siarczan",
        symbol: "CuSO₄•5H₂O",
        cas: "7758-99-8",
        use: [
            "dodatek do nawoz\xf3w i pestycyd\xf3w",
            "dodatek do pasz",
            "jako środek bakteriob\xf3jczy",
            "do produkcji absorbent\xf3w",
            "galwanizacja",
            "pigmenty"
        ]
    },
    {
        name: "Miedzi Octan",
        symbol: "Cu(CH₃COO)₂•H₂O",
        cas: "6046-93-1",
        use: [
            "zastosowanie laboratoryjne",
            "pigmenty"
        ]
    },
    {
        name: "Miedzi Węglan",
        symbol: "CuCO₃•Cu(OH)₂",
        cas: "12069-69-1",
        use: [
            "odczynniki do syntezy",
            "dodatek do nawoz\xf3w"
        ]
    },
    {
        name: "Miedzi Wodorotlenek",
        symbol: "Cu(OH)₂",
        cas: "20427-59-2",
        use: [
            "nawozy",
            "galwanizacja : powłoki/tusze",
            "ceramika",
            "uzdatnianie wody",
            "katalizatory",
            "chemia budowlana"
        ]
    }
];
//Zinc products
const ZINC_PRODUCTS_PL = [
    {
        name: "Cynku Azotan",
        symbol: "Zn(NO₃)₂",
        cas: "7779-88-6",
        use: [
            "nawozy",
            "odczynniki chemiczne"
        ]
    },
    {
        name: "Cynku Chlorek",
        symbol: "ZnCl₂",
        cas: "7646-85-7",
        use: [
            "ogrodnictwo",
            "przemysł nawozowy",
            "p\xf3łprodukt, między innymi do baterii",
            "do powlekania powierzchni metalowych"
        ]
    },
    {
        name: "Cynku Siarczan - 7h",
        symbol: "ZnSO₄•7H₂O",
        cas: "7446-20-0",
        use: [
            "nawozy"
        ]
    },
    {
        name: "Cynku Siarczan - 1h",
        symbol: "ZnSO₄•H₂O",
        cas: "7446-19-7",
        use: [
            "nawozy",
            "pasze"
        ]
    },
    {
        name: "Cynku Tlenek",
        symbol: "ZnO",
        cas: "1314-13-2",
        use: [
            "dodatek do farb",
            "dodatek do lakier\xf3w",
            "stosowany w ceramice",
            "do impregnacji drewna",
            "wypełniacz gum, kauczuk\xf3w, tworzyw sztucznych"
        ]
    }
];
//Manganese products
const MANGANESE_PRODUCTS_PL = [
    {
        name: "Manganu Azotan",
        symbol: "Mn(NO₃)₂",
        cas: "10377-66-9",
        use: [
            "przemysł petrochemiczny",
            "nawozy",
            "galwaniczne"
        ]
    },
    {
        name: "Manganu Chlorek ",
        symbol: "MnCl₂",
        cas: "7773-01-5",
        use: [
            "dodatek do pasz dla zwierząt",
            "do produkcji baterii",
            "nawozy",
            "odczynniki chemiczne"
        ]
    },
    {
        name: "Manganu Octan",
        symbol: "Mn(CH₃COO)₂•4H₂O ",
        cas: "6156-78-1",
        use: [
            "odczynniki do syntez",
            "dodatek do nawoz\xf3w",
            "dodatek do pasz",
            "przemysł petrochemiczny"
        ]
    },
    {
        name: "Manganu Siarczan",
        symbol: "MnSO₄•H₂O",
        cas: "10034-96-5",
        use: [
            "nawozy",
            "dodatek do pasz",
            "odczynniki do syntez"
        ]
    }
];
//OTHER PRODUCTS
const OTHER_PRODUCTS_PL = [
    {
        name: "Żelaza Azotan",
        symbol: "Fe(NO₃)₃",
        cas: "10421-48-4",
        use: [
            "dodatek do nawoz\xf3w",
            "uzdatnianie wody",
            "kondycjonowanie powierzchni metalowych"
        ]
    },
    {
        name: "Srebra Azotan",
        symbol: "AgNO₃",
        cas: "7761-88-8",
        use: [
            "przemysł: chemiczny, fotograficzny, kosmetyczny, fotochemiczny"
        ]
    },
    {
        name: "Bezwodnik Kwasu Chromowego",
        symbol: "CrO₃",
        cas: "1333-82-0",
        use: [
            "katalizatory",
            "obr\xf3bka powierzchni (elektrogalwanizacja)"
        ]
    },
    {
        name: "Kwas Borowy",
        symbol: "H₃BO₃",
        cas: "10043-35-3",
        use: [
            "zastosowanie w przemyśle farmaceutycznym",
            "ma działanie grzybob\xf3jcze",
            "jako naw\xf3z",
            "środek do impregnacji drewna",
            "dodatek do farb"
        ]
    }
];
//CONTACT US TEAMS
// TRADE TEAM
const TRADE_TEAM = [
    {
        name: "Małgorzata Wilczewski",
        department: "Sprzedaż",
        market: "Niemcy",
        email: "mwiklczewski@odczynniki.com.pl",
        mobile: "+48 505 498 884 / +49 178 676 0903"
    },
    {
        name: "Aleksandra Simon",
        department: "Sprzedaż",
        market: "Francja, Belgia",
        email: "asimon@odczynniki.com.pl",
        mobile: "+48 508 218 947"
    },
    {
        name: "Anna Mr\xf3z",
        department: "Sprzedaż",
        market: "Hiszpania",
        email: "amroz@odczynniki.com.pl",
        mobile: "+48 508 218 900"
    },
    {
        name: "Nairy Chaglasyan",
        department: "Sprzedaż",
        market: "Hiszpania, Portugalia",
        email: "nchaglasyan@odczynniki.com.pl",
        mobile: "+34 639 314 391"
    },
    {
        name: "Agnieszka Piątkowska",
        department: "Sprzedaż",
        market: "Ukraina",
        email: "apiatkowska@odczynniki.com.pl",
        mobile: "+48 885 785 007"
    },
    {
        name: "Waldemar Piątkowski",
        department: "Zakupy, sprzedaż, logistyka",
        market: "Polska",
        email: "wpiatkowski@odczynniki.com.pl",
        mobile: "+48 508 218 838"
    },
    {
        name: "Piotr Topolski",
        department: "Zakupy",
        market: "Wszystkie lokalizacje",
        email: "ptopolski@odczynniki.com.pl",
        mobile: "+48 885 785 011"
    }
];
//SETTLEMENT TEAM
const SETTLEMENT_TEAM = [
    {
        name: "Agnieszka Piątkowska",
        email: "apiatkowska@odczynniki.com.pl",
        mobile: "+48 885 785 007"
    },
    {
        name: "Małgorzata Kopniak",
        email: "mkopniak@odczynniki.com.pl",
        mobile: "+48 793 419 215"
    },
    {
        name: "Ewelina Buszko",
        email: "ebuszko@odczynniki.com.pl",
        mobile: "+48 885 785 002"
    }
];


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
/******/ __webpack_require__.O(0, [971,596,744], function() { return __webpack_exec__(80824); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);