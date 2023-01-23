exports.id = 8081;
exports.ids = [8081];
exports.modules = {

/***/ 1991:
/***/ ((module) => {

// Exports
module.exports = {
	"left_panel": "HelpCenter_left_panel__ZQWhK",
	"page_content": "HelpCenter_page_content__9iOTP",
	"faqs_list": "HelpCenter_faqs_list__32doB",
	"nav_item": "HelpCenter_nav_item__2Pyta",
	"active": "HelpCenter_active__UAnSv",
	"page_name": "HelpCenter_page_name__xshgo",
	"content": "HelpCenter_content__GjlTE",
	"mobile_panel": "HelpCenter_mobile_panel__sDftd"
};


/***/ }),

/***/ 8081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Faqs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/HelpCenter.module.css
var HelpCenter_module = __webpack_require__(1991);
var HelpCenter_module_default = /*#__PURE__*/__webpack_require__.n(HelpCenter_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/api/BizsAppFaqsAPI.js
const BizsAppFaqsAPI = [
    {
        iconName: "account",
        pageName: "Account",
        name: "Account"
    },
    {
        iconName: "profile",
        pageName: "Profile",
        name: "Profile"
    },
    {
        iconName: "bmc",
        pageName: "BMC",
        name: "Business Management Card"
    },
    {
        iconName: "connections",
        pageName: "Connections",
        name: "Connections"
    },
    {
        iconName: "Shouts",
        pageName: "Shouts",
        name: "Shouts"
    },
    {
        iconName: "hschat",
        pageName: "BizsChat",
        name: "BizsChat"
    },
    {
        iconName: "List",
        pageName: "List",
        name: "List"
    },
    {
        iconName: "Connection-request",
        pageName: "Request",
        name: "Request"
    },
    {
        iconName: "oiq",
        pageName: "Other_Important_Questions",
        name: "Other Important Questions"
    }
];


;// CONCATENATED MODULE: ./pages/help_center/Faqs.js






function Faqs() {
    const { 0: listData , 1: setListData  } = (0,external_react_.useState)(BizsAppFaqsAPI);
    const { asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (HelpCenter_module_default()).faqs_list,
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: listData.map((curElt)=>{
                    {}
                    const { iconName , pageName , name  } = curElt;
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/help_center/bizsapp-faqs/${pageName}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: asPath === `/help_center/bizsapp-faqs/${pageName}` ? `${(HelpCenter_module_default()).nav_item} ${(HelpCenter_module_default()).active}` : "nav_item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `/img/icons/${iconName}.png`,
                                        alt: "chat",
                                        className: "img-fluid"
                                    }),
                                    " ",
                                    name
                                ]
                            })
                        })
                    });
                })
            })
        })
    });
};
;


/***/ })

};
;