(() => {
var exports = {};
exports.id = 7354;
exports.ids = [7354,3709,2391,9241,5380,3320,5216,6512,6756,9384,1534];
exports.modules = {

/***/ 568:
/***/ ((module) => {

// Exports
module.exports = {
	"bmc_box": "BMCUserCard_bmc_box__q8eHQ",
	"flip_card": "BMCUserCard_flip_card__DJD_F",
	"card": "BMCUserCard_card__SYqIj",
	"active": "BMCUserCard_active__8OBOl",
	"card__face": "BMCUserCard_card__face__K2teV",
	"cardFrontContent": "BMCUserCard_cardFrontContent__f32zG",
	"card__face_front": "BMCUserCard_card__face_front__816UU",
	"card__face_back": "BMCUserCard_card__face_back__TYkfZ",
	"clickButton": "BMCUserCard_clickButton__G1Ygs",
	"cardName": "BMCUserCard_cardName__NLNLd",
	"forntProfileBox": "BMCUserCard_forntProfileBox__DqxtC",
	"companyLogo": "BMCUserCard_companyLogo__SDyp_",
	"companyName": "BMCUserCard_companyName__Xdjbe",
	"designationName": "BMCUserCard_designationName__dlAjc",
	"descriptionBox": "BMCUserCard_descriptionBox__hEWrp",
	"catalogBox": "BMCUserCard_catalogBox__3b8Nc",
	"catalogTitle": "BMCUserCard_catalogTitle__WfD8o",
	"catalogImg": "BMCUserCard_catalogImg__VOKZQ",
	"bottomButtonBox": "BMCUserCard_bottomButtonBox__dXZJt",
	"linkIcon": "BMCUserCard_linkIcon__9moIX",
	"iconBox": "BMCUserCard_iconBox__jsyYV",
	"prouctSliderBox": "BMCUserCard_prouctSliderBox__7EdJ6",
	"selectProductTitle": "BMCUserCard_selectProductTitle__768zw",
	"productName": "BMCUserCard_productName__ElujY",
	"productImg": "BMCUserCard_productImg__p_ATA",
	"cardBackContent": "BMCUserCard_cardBackContent__iIPHh",
	"cardVideoBox": "BMCUserCard_cardVideoBox__N6DfL",
	"cardDateTimeBox": "BMCUserCard_cardDateTimeBox__Vqhyh",
	"cardAddress": "BMCUserCard_cardAddress__AWtsi",
	"cardVideoTitle": "BMCUserCard_cardVideoTitle__gj_dI",
	"dateTimeContent": "BMCUserCard_dateTimeContent__qnbQ6",
	"disable": "BMCUserCard_disable__V8ajC",
	"productPrice": "BMCUserCard_productPrice__YAYYY",
	"productDesc": "BMCUserCard_productDesc__mHqCT",
	"productConnectBtn": "BMCUserCard_productConnectBtn__bOfoq",
	"share_card_content": "BMCUserCard_share_card_content__U8uTI"
};


/***/ }),

/***/ 327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserCard),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(568);
/* harmony import */ var _styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_PageURL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// Import Swiper styles



// import required modules



function UserCard(data) {
    const { 0: cardData , 1: setCardData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCardData(data.data.data);
        console.log("cardData", cardData);
    }, []);
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isProduct , 1: setIsProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectProduct , 1: setSelectProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleModal = ()=>{
        setIsActive(!isActive);
    };
    const handleProduct = (e)=>{
        setIsProduct(true);
        setSelectProduct(e);
    };
    const { 0: copied , 1: setCopied  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${cardData?.brandName} BMC | Business Management Card`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by Bizsapp"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msapplication-TileImage",
                        content: cardData?.brandLogo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:site_name",
                        content: cardData?.brandName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:BMC",
                        content: cardData?.address
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title Card",
                        content: "Business Managment Card"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        itemprop: "image",
                        content: cardData?.brandLogo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:type",
                        content: "image/png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:width",
                        content: "300"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:height",
                        content: "300"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "bizsapp.com"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "container-fluid p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().bmc_box),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().flip_card),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: active ? `${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().card)} ${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().active)}` : (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__face)} ${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__face_front)}`,
                                        style: {
                                            backgroundImage: `linear-gradient(to top, #${cardData?.theme?.dark} , #${cardData?.theme?.light})`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardFrontContent),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardName),
                                                        children: [
                                                            "Business Management Card",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "cardShareBtn",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/img/ecard/menu.png",
                                                                    alt: "share",
                                                                    className: "img-fluid",
                                                                    "data-bs-toggle": "offcanvas",
                                                                    "data-bs-target": "#offcanvasBottom",
                                                                    "aria-controls": "offcanvasBottom"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().forntProfileBox),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().companyLogo),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: cardData?.brandLogo,
                                                                    className: "img-fluid"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().companyName),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    children: cardData?.brandName
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().designationName),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        "(",
                                                                        cardData?.user?.title,
                                                                        ")"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().descriptionBox),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: cardData?.about
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().catalogBox),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().catalogTitle),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: "My Catalogue"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "catalogSlider",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                                                    slidesPerView: "auto",
                                                                    spaceBetween: 10,
                                                                    pagination: {
                                                                        clickable: true
                                                                    },
                                                                    modules: [
                                                                        swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                                    ],
                                                                    className: "mySwiper",
                                                                    children: cardData?.products && cardData?.products?.map((curElt)=>{
                                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().prouctSliderBox),
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().productImg),
                                                                                            children: curElt.images && curElt.images?.map((productImg, index)=>{
                                                                                                if (index <= 1) {
                                                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                            src: productImg.location,
                                                                                                            onClick: ()=>handleProduct(curElt)
                                                                                                            ,
                                                                                                            alt: "catalog_image",
                                                                                                            className: "img-fluid"
                                                                                                        })
                                                                                                    });
                                                                                                }
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().productName),
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                children: curElt.title
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        });
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().bottomButtonBox),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: `tel:+91${cardData?.contacts[0]?.contactNumber}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/img/ecard/phone.png",
                                                                                alt: "phone",
                                                                                className: "img-fluid"
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: `https://wa.me/+91${cardData?.contacts[1]?.contactNumber}?text=Hello ${cardData?.brandName}`,
                                                                            target: "_blank",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/img/ecard/whatsapp.png",
                                                                                alt: "whatsapp",
                                                                                className: "img-fluid"
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox)}  ${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().linkIcon)}`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/linkBig.png",
                                                                            alt: "link",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/bizsicon.png",
                                                                            alt: "mail",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        onClick: ()=>setActive(!active)
                                                                        ,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/next.png",
                                                                            alt: "arow",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: isActive ? "shareModalBoxOpen" : "null",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox)} openShareModal`,
                                                        onClick: handleModal,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/ecard/linkBig.png",
                                                                alt: "link",
                                                                className: "img-fluid"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/ecard/close.png",
                                                                alt: "link",
                                                                className: "img-fluid"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "shareModalBox",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/chat.png",
                                                                            alt: "arow",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                }),
                                                                cardData?.socialLinks && cardData?.socialLinks?.map((curElt)=>{
                                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            curElt.socialLinkType === "Facebook" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "Facebook"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "Instagram" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "Instagram"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "Youtube" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "YouTube"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "LinkedIn" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "Linkedin"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "Twitter" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: " Twitter"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    });
                                                                }),
                                                                cardData?.websiteLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: cardData?.websiteLink,
                                                                        target: "_blank",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: "/img/ecard/link.png",
                                                                                    alt: "arow",
                                                                                    className: "img-fluid"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                children: "Website"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: isProduct ? "productModalBoxOpen" : "null",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "productModalBox",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "productModalContent",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/ecard/closeWhite.png",
                                                                alt: "closeWhite",
                                                                className: "img-fluid",
                                                                onClick: ()=>setIsProduct("")
                                                            }),
                                                            console.log("product data ", selectProduct),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().selectProductTitle),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: selectProduct ? selectProduct?.title : ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                                                slidesPerView: "auto",
                                                                spaceBetween: 30,
                                                                pagination: {
                                                                    clickable: true
                                                                },
                                                                modules: [
                                                                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                                                                ],
                                                                className: "ProductSwiper",
                                                                children: selectProduct ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().prouctSliderBox),
                                                                    children: selectProduct?.images && selectProduct?.images?.map((curEltImg)=>{
                                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "productSliderBox",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: curEltImg.location
                                                                                    })
                                                                                })
                                                                            })
                                                                        });
                                                                    })
                                                                }) : ""
                                                            }),
                                                            selectProduct ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().productPrice),
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: "/img/ecard/rupee.png",
                                                                                    alt: "arow",
                                                                                    className: "img-fluid"
                                                                                }),
                                                                                " ",
                                                                                selectProduct ? selectProduct.price : ""
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().productDesc),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: "Service Description"
                                                                            }),
                                                                            selectProduct?.description
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().productConnectBtn),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            children: "Start Chat"
                                                                        })
                                                                    })
                                                                ]
                                                            }) : ""
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__face)} ${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__face_back)}`,
                                        style: {
                                            backgroundImage: `linear-gradient(to top, #${cardData?.theme?.dark} , #${cardData?.theme?.light})`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardBackContent),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardName),
                                                        children: [
                                                            "Business Management Card",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "cardShareBtn",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/img/ecard/menu.png",
                                                                    alt: "share",
                                                                    className: "img-fluid",
                                                                    "data-bs-toggle": "offcanvas",
                                                                    "data-bs-target": "#offcanvasBottom",
                                                                    "aria-controls": "offcanvasBottom"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardVideoBox),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cardVideo",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                    url: cardData?.brandVideo?.location ? cardData?.brandVideo?.location : cardData?.brandVideo?.link,
                                                                    controls: true,
                                                                    config: {
                                                                        file: {
                                                                            attributes: {
                                                                                controlsList: "nodownload"
                                                                            }
                                                                        }
                                                                    },
                                                                    onContextMenu: (e)=>e.preventDefault()
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardVideoTitle),
                                                                    children: cardData?.brandVideo?.videoTitle
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardDateTimeBox),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cardDataTime",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    children: "Day & Time"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().dateTimeContent),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            children: cardData?.businessTiming
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                            children: [
                                                                                cardData?.businessDays.includes("monday") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "MO"
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().disable),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "MO"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                cardData?.businessDays.includes("tuesday") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "TU"
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().disable),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "TU"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                cardData?.businessDays.includes("wednesday") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "WE"
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().disable),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "WE"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                cardData?.businessDays.includes("thursday") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "TH"
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().disable),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "TH"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                cardData?.businessDays.includes("friday") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "FR"
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().disable),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "FR"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                cardData?.businessDays.includes("saturday") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "SA"
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().disable),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "SA"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                cardData?.businessDays.includes("sunday") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "SU"
                                                                                        })
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().disable),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "SU"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardAddress),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cardDataTime",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    children: "Address"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().dateTimeContent),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: cardData?.address
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().bottomButtonBox),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: `tel:+91${cardData?.contacts[0]?.contactNumber}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/img/ecard/phone.png",
                                                                                alt: "phone",
                                                                                className: "img-fluid"
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: `https://wa.me/+91${cardData?.contacts[1]?.contactNumber}?text=Hello ${cardData?.brandName}`,
                                                                            target: "_blank",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/img/ecard/whatsapp.png",
                                                                                alt: "whatsapp",
                                                                                className: "img-fluid"
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox)} ${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().linkIcon)}`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/linkBig.png",
                                                                            alt: "link",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/bizsicon.png",
                                                                            alt: "mail",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox),
                                                                        onClick: ()=>setActive(!active)
                                                                        ,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/back.png",
                                                                            alt: "arow",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: isActive ? "shareModalBoxOpen" : "null",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconBox)} openShareModal`,
                                                        onClick: handleModal,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/ecard/linkBig.png",
                                                                alt: "link",
                                                                className: "img-fluid"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/ecard/close.png",
                                                                alt: "link",
                                                                className: "img-fluid"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "shareModalBox",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/img/ecard/chat.png",
                                                                            alt: "arow",
                                                                            className: "img-fluid"
                                                                        })
                                                                    })
                                                                }),
                                                                cardData?.socialLinks && cardData?.socialLinks?.map((curElt)=>{
                                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            curElt.socialLinkType === "Facebook" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "Facebook"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "Instagram" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "Instagram"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "Youtube" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "YouTube"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "LinkedIn" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: "Linkedin"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            curElt.socialLinkType === "Twitter" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: curElt.link,
                                                                                    target: "_blank",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "/img/ecard/link.png",
                                                                                                alt: "arow",
                                                                                                className: "img-fluid"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            children: " Twitter"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    });
                                                                }),
                                                                cardData?.websiteLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            href: cardData?.websiteLink,
                                                                            target: "_blank",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: "/img/ecard/link.png",
                                                                                        alt: "arow",
                                                                                        className: "img-fluid"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    children: "Website"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "card_share_modal",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "offcanvas offcanvas-bottom",
                                    tabIndex: "-1",
                                    id: "offcanvasBottom",
                                    "aria-labelledby": "offcanvasBottomLabel",
                                    style: {
                                        backgroundImage: `linear-gradient(to top, #${cardData?.theme?.dark} , #${cardData?.theme?.light})`
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "offcanvas-body small",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().share_card_content),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: "Share Via"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().share_media),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    onClick: copy,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: "/img/cardIcon/copyClipboard.png",
                                                                            alt: "copy_to_clipboard",
                                                                            width: 35,
                                                                            height: 35
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon_name),
                                                                            children: !copied ? "Copy to clipboard" : "Copied!"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: `https://www.facebook.com/sharer/sharer.php?u=${_utils_PageURL__WEBPACK_IMPORTED_MODULE_8__/* .pageURL */ .i}${cardData?.user?._id}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: "/img/cardIcon/facebook.png",
                                                                            alt: "facebook",
                                                                            width: 35,
                                                                            height: 35
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon_name),
                                                                            children: "Facebook"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: `whatsapp://send?text=${_utils_PageURL__WEBPACK_IMPORTED_MODULE_8__/* .pageURL */ .i}${cardData?.user?._id}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: "/img/cardIcon/whatsapp.png",
                                                                            alt: "whatsapp",
                                                                            width: 35,
                                                                            height: 35
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon_name),
                                                                            children: "Whatsapp"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: `https://twitter.com/intent/tweet?url=${_utils_PageURL__WEBPACK_IMPORTED_MODULE_8__/* .pageURL */ .i}${cardData?.user?._id}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: "/img/cardIcon/twitter.png",
                                                                            alt: "twitter",
                                                                            width: 35,
                                                                            height: 35
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon_name),
                                                                            children: "Twitter"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: `https://www.linkedin.com/sharing/share-offsite/?url=${_utils_PageURL__WEBPACK_IMPORTED_MODULE_8__/* .pageURL */ .i}${cardData?.user?._id}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: "/img/cardIcon/linkedin.png",
                                                                            alt: "linkedin",
                                                                            width: 35,
                                                                            height: 35
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon_name),
                                                                            children: "Linkedin"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: `https://telegram.me/share/url?url=${_utils_PageURL__WEBPACK_IMPORTED_MODULE_8__/* .pageURL */ .i}${cardData?.user?._id}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: "/img/cardIcon/telegram.png",
                                                                            alt: "telegram",
                                                                            width: 35,
                                                                            height: 35
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: (_styles_BMCUserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon_name),
                                                                            children: "Telegram"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
;
async function getServerSideProps(context) {
    const id = context.query.id;
    console.log("iddddddddddd: ", id);
    const res = await fetch(`https://bizsapp.co.in/api/business/card/${id}`);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data: data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ pageURL)
/* harmony export */ });
const pageURL = "https://www.bizsapp.online/ecardDesign/BMC?id=";



/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8924:
/***/ ((module) => {

"use strict";
module.exports = require("react-player");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,5675], () => (__webpack_exec__(327)));
module.exports = __webpack_exports__;

})();