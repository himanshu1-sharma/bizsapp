(() => {
var exports = {};
exports.id = 5490;
exports.ids = [5490,3709,3415,7698,2391,9241,5380,3320,5216,6512,6756,7121,9384,6131,7764,1534];
exports.modules = {

/***/ 8726:
/***/ ((module) => {

// Exports
module.exports = {
	"flip_card_main_box": "CubeCard_flip_card_main_box__WpAiT",
	"flip_card": "CubeCard_flip_card__r3oL2",
	"content": "CubeCard_content__DaIX_",
	"more": "CubeCard_more__m1OHZ",
	"front": "CubeCard_front__yz04x",
	"back": "CubeCard_back__x3Lq_",
	"inner": "CubeCard_inner__b7jLx",
	"button": "CubeCard_button__NVtRU",
	"card_header": "CubeCard_card_header__y3vzV",
	"company_logo": "CubeCard_company_logo__CfxJ7",
	"company_about": "CubeCard_company_about__vARVJ",
	"company_name": "CubeCard_company_name__leq2B",
	"card_holder_name": "CubeCard_card_holder_name__fmboP",
	"company_description": "CubeCard_company_description__mGUl9",
	"detail_box": "CubeCard_detail_box__N9Zg1",
	"social_link": "CubeCard_social_link__SrX6A",
	"social_link_box": "CubeCard_social_link_box__0lZcf",
	"business_day": "CubeCard_business_day__RZJhT",
	"detail_text_effect": "CubeCard_detail_text_effect__NFroD",
	"detail_text_effect_shadow": "CubeCard_detail_text_effect_shadow__EIdb1",
	"enquiry_box": "CubeCard_enquiry_box__aamY_",
	"enquiry_box_content": "CubeCard_enquiry_box_content__ogI0H",
	"business_card_footer": "CubeCard_business_card_footer__JDSBS",
	"business_card_footer_button": "CubeCard_business_card_footer_button__LCufM",
	"card_video_logo": "CubeCard_card_video_logo___NxCc",
	"share_card_content": "CubeCard_share_card_content__P0lzs",
	"share_media": "CubeCard_share_media__6s3z6",
	"icon_name": "CubeCard_icon_name__Va5Ov",
	"card_back_logo": "CubeCard_card_back_logo__xFOpF",
	"video_box": "CubeCard_video_box__BVl4d",
	"card_back_logo_outline": "CubeCard_card_back_logo_outline__eszlk",
	"business_card_footer-button": "CubeCard_business_card_footer-button__bFzg5"
};


/***/ }),

/***/ 3686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CubeBMC),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8726);
/* harmony import */ var _styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5368);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_PageURL__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8807);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Import Swiper React components

// Import Swiper styles


// import required modules







// import * as React from "react";



function CubeBMC({ properties: properties1  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: properties1 && properties1.map((properties)=>{
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
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "cube_card",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        effect: "cube",
                        grabCursor: true,
                        cubeEffect: {
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94
                        },
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_3__.EffectCube
                        ],
                        className: "mySwiper",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().flip_card_main_box),
                                    id: properties.user,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().flip_card),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().content),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().front),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().inner),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().card_header),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Business Management Card"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().company_logo),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: properties.brandLogo,
                                                                        className: "img-fluid"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().company_about),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().company_name),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            children: properties.brandName
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().card_holder_name),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            children: properties.businessName
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().company_description),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().detail_box),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().social_link)} ${(_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().social_link_box)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Social Links"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                            children: properties.socialLinks.map((curElt)=>{
                                                                                {}
                                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: curElt.link,
                                                                                        children: [
                                                                                            curElt.socialLinkType === "Facebook" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    viewBox: "0 0 320 512",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                                                                    })
                                                                                                })
                                                                                            }),
                                                                                            curElt.socialLinkType === "Instagram" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faInstagram
                                                                                                })
                                                                                            }),
                                                                                            curElt.socialLinkType === "Youtube" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faYoutube
                                                                                                })
                                                                                            }),
                                                                                            curElt.socialLinkType === "LinkedIn" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faLinkedin
                                                                                                })
                                                                                            }),
                                                                                            curElt.socialLinkType === "Twitter" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTwitter
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                });
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().social_link)} ${(_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().business_day)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Business Days"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                            children: properties.businessDays.map((curElt)=>{
                                                                                {}
                                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: curElt.substr(0, 3)
                                                                                        })
                                                                                    })
                                                                                });
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().detail_text_effect_shadow),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        src: "/img/icons/shadow.png",
                                                                        width: 139,
                                                                        height: 27,
                                                                        alt: "detail_shadow"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().detail_text_effect),
                                                                    children: "Details"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().enquiry_box),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                children: [
                                                                    properties.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().enquiry_box_content),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEnvelope
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        children: properties.email
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().enquiry_box_content),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    href: "mailto:" + properties.email,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        children: " Send Mail"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    properties.websiteLink && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().enquiry_box_content),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGlobe
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        children: properties.websiteLink
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().enquiry_box_content),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    href: properties.websiteLink,
                                                                                    target: "_blank",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        children: "Visit Website"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    properties.address && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().enquiry_box_content),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLocationDot
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        children: properties.address
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().enquiry_box_content),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                    href: "https://goo.gl/maps/SfoXVabwnLBhSBHD9",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        children: " Get Location"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().business_card_footer),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().business_card_footer_button),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                        href: "tel:+91" + properties.contacts[0].contactNumber,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            src: "/img/icons/call.png",
                                                                            alt: "call_icon",
                                                                            width: 27,
                                                                            height: 27
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().business_card_footer_button),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            src: "/img/icons/chat.png",
                                                                            alt: "chat_icon",
                                                                            width: 27,
                                                                            height: 27
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().business_card_footer_button),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "https://wa.me/+91" + properties.contacts[1].contactNumber + "?text=Hello " + properties.businessName,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                            src: "/img/icons/whatsapp.png",
                                                                            alt: "whatsapp_icon",
                                                                            width: 27,
                                                                            height: 27
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().business_card_footer_button),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                src: "/img/icons/share.png",
                                                                                alt: "share_icon",
                                                                                width: 27,
                                                                                height: 27,
                                                                                "data-bs-toggle": "offcanvas",
                                                                                "data-bs-target": "#offcanvasBottom",
                                                                                "aria-controls": "offcanvasBottom"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "card_share_modal",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "offcanvas offcanvas-bottom",
                                                                                tabIndex: "-1",
                                                                                id: "offcanvasBottom",
                                                                                "aria-labelledby": "offcanvasBottomLabel",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "offcanvas-body small",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().share_card_content),
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                                                children: "Share Via"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().share_media),
                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                                                onClick: copy,
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                                                        src: "/img/cardIcon/copy.png",
                                                                                                                        alt: "copy_to_clipboard",
                                                                                                                        width: 35,
                                                                                                                        height: 35
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().icon_name),
                                                                                                                        children: !copied ? "Copy to clipboard" : "Copied!"
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                                                href: "https://www.facebook.com/sharer/sharer.php?u=localhost:3001/ecardDesign/EcardDesign?id=" + properties.user,
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                                                        src: "/img/cardIcon/facebook.png",
                                                                                                                        alt: "facebook",
                                                                                                                        width: 35,
                                                                                                                        height: 35
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().icon_name),
                                                                                                                        children: "Facebook"
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                                                href: `whatsapp://send?text=${_utils_PageURL__WEBPACK_IMPORTED_MODULE_13__/* .pageURL */ .i}${properties.user}`,
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                                                        src: "/img/cardIcon/whatsapp.png",
                                                                                                                        alt: "whatsapp",
                                                                                                                        width: 35,
                                                                                                                        height: 35
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().icon_name),
                                                                                                                        children: "Whatsapp"
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                                                        src: "/img/cardIcon/gmail.png",
                                                                                                                        alt: "gmail",
                                                                                                                        width: 35,
                                                                                                                        height: 35
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().icon_name),
                                                                                                                        children: "Gmail"
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
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().flip_card_main_box),
                                    id: properties.user,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().flip_card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "checkbox",
                                                id: "card1",
                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().more),
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().content),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().back),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().inner),
                                                        children: properties.brandVideo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().video_box),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                                                controls: true,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                                        src: properties.brandVideo,
                                                                        type: "video/mp4"
                                                                    }),
                                                                    "Your browser does not support the video tag."
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().card_video_logo),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().card_back_logo_outline),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_CubeCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().card_back_logo),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        src: "/img/ecard/bizsapp-logo.svg",
                                                                        alt: "BizsApp",
                                                                        width: 151,
                                                                        height: 140
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            });
        })
    });
};
;
async function getServerSideProps(context) {
    const id = context.query.id.toString();
    const { db  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_11__/* .connectToDatabase */ .v)();
    const data = await db.collection("businesscards").find({
        user: (0,mongodb__WEBPACK_IMPORTED_MODULE_10__.ObjectId)(id)
    }).toArray();
    const properties = JSON.parse(JSON.stringify(data));
    return {
        props: {
            properties: properties
        }
    };
}
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5368:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,5675,9505,1664,7900], () => (__webpack_exec__(3686)));
module.exports = __webpack_exports__;

})();