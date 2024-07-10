exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 96334:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 68258));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56047));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73525));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 32601))

/***/ }),

/***/ 57279:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 56047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14835);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lang_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32601);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Footer = ()=>{
    const { data } = (0,_lang_LocaleContext__WEBPACK_IMPORTED_MODULE_4__.useLocale)() || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "footer p-10 bg-base-200 text-base-content",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__.CldImage, {
                            className: "rounded object-cover",
                            src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/d0aiktzryueeujazncph.png",
                            alt: "INORG Logo",
                            width: 70,
                            height: 70
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            data?.CMOC,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            data?.MI
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "footer-title",
                        children: data?.LINKS
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/aboutUs",
                        className: "link link-hover",
                        children: data?.ABOUT_US
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/certificates",
                        className: "link link-hover",
                        children: data?.OUR_CERTIFICATES
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/carerrs",
                        className: "link link-hover",
                        children: data?.CAREERS
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/news",
                        className: "link link-hover",
                        children: data?.NEWS
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "footer-title",
                        children: data?.CONTACT
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__.CldImage, {
                                src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/ijt9xa0obuhvt6sbw2o3.svg",
                                width: 22,
                                height: 22,
                                alt: "home icon",
                                className: "mr-2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "link link-hover",
                                children: data?.OFFICE_ADDRESS
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__.CldImage, {
                                src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/oee1rkckq36hdhtpmox5.svg",
                                width: 21,
                                height: 21,
                                alt: "phone icon",
                                className: "mr-2"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "link link-hover",
                                children: [
                                    data?.TEL1,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "ml-2",
                                children: data?.TEL2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "ml-2 float-left clear-left",
                                children: data?.FAX
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__.CldImage, {
                                src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/vzigu4ctnrf3h83fgbal.svg",
                                width: 22,
                                height: 22,
                                alt: "email icon",
                                className: "mr-2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "link link-hover",
                                children: data?.OFFICE_EMAIL
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 68258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14835);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lang_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32601);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70880);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Navbar = ()=>{
    const [sideMenuOpen, setSideMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { data, setLocale, currentLocale } = (0,_lang_LocaleContext__WEBPACK_IMPORTED_MODULE_4__.useLocale)() || {};
    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("PL");
    const handleLanguageChange = (lang)=>{
        const selectedLanguage = _constants__WEBPACK_IMPORTED_MODULE_5__/* .LANGUAGES */ .a2.find((language)=>language.code === lang);
        setLocale(lang);
        setCurrentLanguage(selectedLanguage?.label || "PL");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const selectedLanguage = _constants__WEBPACK_IMPORTED_MODULE_5__/* .LANGUAGES */ .a2.find((lang)=>lang.code === currentLocale);
        setCurrentLanguage(selectedLanguage?.label || "EN");
    }, [
        currentLocale
    ]);
    const handleClick = ()=>{
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex items-start max-container relative z-30 py-5 mb-6 gap-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-auto justify-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__.CldImage, {
                        src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/f5065d6a7ulp9pww81ux.png",
                        alt: "INORG Logo",
                        width: 150,
                        height: 90,
                        className: "object-cover"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "border-b-2 border-b-primary",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "hidden lg:flex h-full md:gap-3 lg-gap-3 xl:gap-6",
                    children: [
                        data?.NAV_LINKS.map((link)=>link.key !== "products" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: link.href,
                                onClick: handleClick,
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4",
                                        children: link.label
                                    })
                                ]
                            }, link.label) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " dropdown dropdown-hover ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        tabIndex: 0,
                                        className: "lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 ",
                                        children: link.label
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        tabIndex: 0,
                                        className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40",
                                        children: data?.PRODUCTS.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: product.href,
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        onClick: handleClick,
                                                        className: "flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg  ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: product.name
                                                        })
                                                    })
                                                ]
                                            }, product.name))
                                    })
                                ]
                            }, link.label)),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "dropdown dropdown-hover",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    tabIndex: 0,
                                    className: "lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 ",
                                    children: currentLanguage
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    tabIndex: 0,
                                    className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-18 right-05 ",
                                    children: _constants__WEBPACK_IMPORTED_MODULE_5__/* .LANGUAGES */ .a2.map((lang)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>handleLanguageChange(lang.code),
                                            className: "flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: lang.label
                                            })
                                        }, lang.code))
                                })
                            ]
                        })
                    ]
                })
            }),
            sideMenuOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:hidden relative flex flex-col h-[calc(100vh-96px)] top-24 left-0 w-full justify-items-center items-center gap-12",
                children: [
                    data?.NAV_LINKS.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: link.href,
                            className: "bold-10 text-default flexCenter cursor-pointer",
                            children: link.label
                        }, link.key)),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "dropdown dropdown-hover",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                tabIndex: 0,
                                className: "lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 left-8",
                                children: currentLanguage
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                tabIndex: 0,
                                className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-18 right-05",
                                children: _constants__WEBPACK_IMPORTED_MODULE_5__/* .LANGUAGES */ .a2.map((lang)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>handleLanguageChange(lang.code),
                                        className: "flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: lang.label
                                        })
                                    }, lang.code))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex cursor-pointer items-right lg:hidden ml-auto items-center justify-center mr-5 mt-4",
                onClick: ()=>setSideMenuOpen(!sideMenuOpen),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_3__.CldImage, {
                    src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1715596117/midas/yasjrmzm8nb1naka6xcq.svg",
                    alt: "Menu",
                    width: 35,
                    height: 30,
                    className: "w-full h-full"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 70880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EC: () => (/* binding */ SETTLEMENT_TEAM),
/* harmony export */   a2: () => (/* binding */ LANGUAGES),
/* harmony export */   pT: () => (/* binding */ TRADE_TEAM),
/* harmony export */   pv: () => (/* binding */ NICKEL_PRODUCTS_PL)
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

/***/ 32601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LocaleProvider: () => (/* binding */ LocaleProvider),
  useLocale: () => (/* binding */ useLocale)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./lang/i18n.js
const localesData = {
    en: ()=>__webpack_require__.e(/* import() */ 149).then(__webpack_require__.bind(__webpack_require__, 23939)),
    fr: ()=>__webpack_require__.e(/* import() */ 288).then(__webpack_require__.bind(__webpack_require__, 20288)),
    pl: ()=>__webpack_require__.e(/* import() */ 145).then(__webpack_require__.bind(__webpack_require__, 11145)),
    de: ()=>__webpack_require__.e(/* import() */ 576).then(__webpack_require__.bind(__webpack_require__, 8576)),
    ru: ()=>__webpack_require__.e(/* import() */ 937).then(__webpack_require__.bind(__webpack_require__, 17937))
};
async function getLocaleData(locale) {
    const data = await localesData[locale]();
    return data;
}

;// CONCATENATED MODULE: ./lang/LocaleContext.tsx
/* __next_internal_client_entry_do_not_use__ LocaleProvider,useLocale auto */ 



const LocaleContext = /*#__PURE__*/ (0,react_.createContext)({
    data: null,
    setLocale: ()=>{},
    currentLocale: "pl"
});
const LocaleProvider = ({ children })=>{
    const router = (0,navigation.useRouter)(); // Update the type of 'router' to 'any'
    const { locale, defaultLocale, pathname, asPath, query } = router;
    const [data, setData] = (0,react_.useState)(null);
    const [currentLocale, setCurrentLocale] = (0,react_.useState)(locale || defaultLocale || "pl");
    (0,react_.useEffect)(()=>{
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
        const newPath = queryString ? `${safePathname}?${queryString}` : safePathname;
        const pushResult = router.push(newPath, asPath, {
            locale: newLocale
        });
        if (pushResult && typeof pushResult.then === "function") {
            pushResult.catch(console.error);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(LocaleContext.Provider, {
        value: {
            data,
            setLocale,
            currentLocale
        },
        children: children
    });
};
const useLocale = ()=>(0,react_.useContext)(LocaleContext);


/***/ }),

/***/ 73525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const AuthProvider = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);


/***/ }),

/***/ 23362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"node_modules\\geist\\dist\\sans.js","import":"","arguments":[{"src":"./fonts/geist-sans/Geist-Variable.woff2","variable":"--font-geist-sans","weight":"100 900"}],"variableName":"GeistSans"}
var Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_ = __webpack_require__(74999);
var Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_default = /*#__PURE__*/__webpack_require__.n(Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Michal\Desktop\odczynniki\midas\components\Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
;// CONCATENATED MODULE: ./components/Footer.tsx

const Footer_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Michal\Desktop\odczynniki\midas\components\Footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Footer_esModule, $$typeof: Footer_$$typeof } = Footer_proxy;
const Footer_default_ = Footer_proxy.default;


/* harmony default export */ const Footer = (Footer_default_);
;// CONCATENATED MODULE: ./providers/AuthProvider.tsx

const AuthProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Michal\Desktop\odczynniki\midas\providers\AuthProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthProvider_esModule, $$typeof: AuthProvider_$$typeof } = AuthProvider_proxy;
const AuthProvider_default_ = AuthProvider_proxy.default;


/* harmony default export */ const AuthProvider = (AuthProvider_default_);
;// CONCATENATED MODULE: ./lang/LocaleContext.tsx

const LocaleContext_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Michal\Desktop\odczynniki\midas\lang\LocaleContext.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: LocaleContext_esModule, $$typeof: LocaleContext_$$typeof } = LocaleContext_proxy;
const LocaleContext_default_ = LocaleContext_proxy.default;

const e0 = LocaleContext_proxy["LocaleProvider"];

const e1 = LocaleContext_proxy["useLocale"];

;// CONCATENATED MODULE: ./app/layout.tsx







const metadata = {
    title: "Midas",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_default()).className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"93x99"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;