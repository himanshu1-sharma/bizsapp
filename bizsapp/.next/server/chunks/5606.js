exports.id = 5606;
exports.ids = [5606];
exports.modules = {

/***/ 735:
/***/ ((module) => {

// Exports
module.exports = {
	"contact_form": "ContactForm_contact_form__bcU_A",
	"form_group": "ContactForm_form_group__Fb5BR"
};


/***/ }),

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(735);
/* harmony import */ var _styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




function ContactForm() {
    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    function handleChange(e) {
        const { name , value  } = e.target;
        setInput((prevInput)=>{
            return {
                ...prevInput,
                [name]: value
            };
        });
    }
    function handleClick(e) {
        e.preventDefault();
        console.log(input);
        const newInput = {
            name: input.name,
            phone: input.phone,
            email: input.email,
            message: input.message
        };
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://localhost:3001/getinput", newInput);
        window.location.reload(false);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact_form),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form_group),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        for: "name",
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "name",
                                        id: "name",
                                        placeholder: "Enter your name",
                                        className: "form-control",
                                        onChange: handleChange,
                                        value: input.value
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form_group),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        for: "phone",
                                        children: "Phone Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        name: "phone",
                                        id: "phone",
                                        placeholder: "Enter your phone number",
                                        className: "form-control",
                                        onChange: handleChange,
                                        value: input.value
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form_group),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        for: "email",
                                        children: "Email Address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        name: "email",
                                        id: "email",
                                        placeholder: "Enter your email",
                                        className: "form-control",
                                        onChange: handleChange,
                                        value: input.value
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form_group),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        for: "email",
                                        children: "Please enter your message below."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        name: "message",
                                        placeholder: "Type here...",
                                        className: "form-control",
                                        rows: "6",
                                        onChange: handleChange,
                                        value: input.value
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form_group),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleClick,
                                    children: "Submit"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};


/***/ })

};
;