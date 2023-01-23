"use strict";
exports.id = 5263;
exports.ids = [5263];
exports.modules = {

/***/ 5263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DownloadCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/api/DownloadCardApi.js
const Card = [
    {
        imgSrc: "Icon-1",
        title: "Modern & Trendy Design",
        desc: "BizsApp Team Developed Morden And Trendy Design of Application For Give Premium Experience To  User after Exploring BizsApp "
    },
    {
        imgSrc: "Icon-2",
        title: "Save Your Time",
        desc: "BizsApp Team Always Committed To Save Your Time By Using BizsApp Because We Are Understand Your Time Is Precious "
    },
    {
        imgSrc: "Icon-3",
        title: "Build Your Community",
        desc: "By using BizsApp User Will Build Community According To There interest Here, BizsApp Mostly Profile Are verified "
    }
];


// EXTERNAL MODULE: ./styles/Download.module.css
var Download_module = __webpack_require__(7587);
var Download_module_default = /*#__PURE__*/__webpack_require__.n(Download_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/download/DownloadCard.js





function DownloadCard() {
    const { 0: cardData , 1: setCardData  } = (0,external_react_.useState)(Card);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mt-5 ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "title text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Why Download BizsApp"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Read & Explore great Features of BizsApp, We Developed BizsApp ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "According to business Needs. "
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: cardData.map((curElt)=>{
                        console.log(cardData);
                        const { imgSrc , title , desc  } = curElt;
                        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Download_module_default()).card_box,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: `/img/download/${imgSrc}.png`,
                                            width: 92,
                                            height: 92,
                                            alt: "icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: desc
                                        })
                                    ]
                                })
                            })
                        });
                    })
                })
            ]
        })
    });
};
;


/***/ })

};
;