"use strict";
exports.id = 7897;
exports.ids = [7897];
exports.modules = {

/***/ 7897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HelpCenterList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/HelpCenter.module.css
var HelpCenter_module = __webpack_require__(1991);
var HelpCenter_module_default = /*#__PURE__*/__webpack_require__.n(HelpCenter_module);
;// CONCATENATED MODULE: ./pages/api/HelpCenterListAPI.js
const HelpCenterListAPI = [
    {
        iconName: "terms",
        name: "Terms",
        pageName: "Terms"
    },
    {
        iconName: "lock",
        name: "Privacy & Policy",
        pageName: "Privacy_Policy"
    },
    {
        iconName: "contact",
        name: "Contact",
        pageName: "Contact"
    }
];


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/help_center/HelpCenterList.js






function HelpCenterList() {
    const { 0: listName , 1: setListName  } = (0,external_react_.useState)(HelpCenterListAPI);
    const { asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: listName.map((curElt)=>{
                const { iconName , name , pageName  } = curElt;
                return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/help_center/${pageName}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: asPath === `/help_center/${pageName}` ? `${(HelpCenter_module_default()).nav_item} ${(HelpCenter_module_default()).active}` : "nav_item",
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
    });
};
;


/***/ })

};
;