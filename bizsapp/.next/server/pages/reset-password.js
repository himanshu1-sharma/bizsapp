(() => {
var exports = {};
exports.id = 8006;
exports.ids = [8006,6756,7764,8463];
exports.modules = {

/***/ 3455:
/***/ ((module) => {

// Exports
module.exports = {
	"header_bg": "ResetPassword_header_bg__PCgXD",
	"logo": "ResetPassword_logo__IFkov",
	"resetPassword_bg": "ResetPassword_resetPassword_bg__nUi1z",
	"resetPassword_box": "ResetPassword_resetPassword_box__cZkKP",
	"resetPassword_form": "ResetPassword_resetPassword_form__qlxsD",
	"formGroup": "ResetPassword_formGroup__A_oi4"
};


/***/ }),

/***/ 7071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ resetPassword),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/ResetPassword.module.css
var ResetPassword_module = __webpack_require__(3455);
var ResetPassword_module_default = /*#__PURE__*/__webpack_require__.n(ResetPassword_module);
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./lib/mongodb.js
// import { MongoClient } from 'mongodb'
// const uri = process.env.MONGODB_URI
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }
// let client
// let clientPromise
// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local')
// }
// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }
// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;
let cachedClient = null;
let cachedDb = null;
if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
if (!dbName) {
    throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}
async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    const client = await external_mongodb_namespaceObject.MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = await client.db(dbName);
    cachedClient = client;
    cachedDb = db;
    return {
        client,
        db
    };
}

;// CONCATENATED MODULE: ./pages/reset-password.js






function resetPassword({ properties: properties1  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: properties1 && properties1.map((properties)=>{
            const { 0: input , 1: setInput  } = (0,external_react_.useState)({
                password: "",
                confirmPassword: ""
            });
            const { 0: error , 1: setError  } = (0,external_react_.useState)({
                password: "",
                confirmPassword: ""
            });
            const onInputChange = (e)=>{
                const { name , value  } = e.target;
                setInput((prev)=>({
                        ...prev,
                        [name]: value
                    })
                );
                validateInput(e);
            };
            const validateInput = (e)=>{
                let { name , value  } = e.target;
                setError((prev)=>{
                    const stateObj = {
                        ...prev,
                        [name]: ""
                    };
                    switch(name){
                        case "password":
                            if (!value) {
                                stateObj[name] = "Please enter Password.";
                            } else if (input.confirmPassword && value !== input.confirmPassword) {
                                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                            } else {
                                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                            }
                            break;
                        case "confirmPassword":
                            if (!value) {
                                stateObj[name] = "Please enter Confirm Password.";
                            } else if (input.password && value !== input.password) {
                                stateObj[name] = "Password and Confirm Password does not match.";
                            }
                            break;
                        default:
                            break;
                    }
                    return stateObj;
                });
            };
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "container-fluid p-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ResetPassword_module_default()).header_bg,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ResetPassword_module_default()).logo,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "./img/logo/logo-white.png",
                                                    alt: "BizsApp_Logo"
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }),
                    properties.name ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "container-fluid p-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ResetPassword_module_default()).resetPassword_bg,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ResetPassword_module_default()).resetPassword_box,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            children: [
                                                "Hii ",
                                                properties.name
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (ResetPassword_module_default()).resetPassword_form,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Set new password"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (ResetPassword_module_default()).formGroup,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "New Password *"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    name: "password",
                                                                    className: "form-control",
                                                                    minLength: "6",
                                                                    maxLength: "20",
                                                                    value: input.password.trim(),
                                                                    onChange: onInputChange,
                                                                    onBlur: validateInput
                                                                }),
                                                                error.password && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: error.password
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (ResetPassword_module_default()).formGroup,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Repeat New Password *"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "password",
                                                                    name: "confirmPassword",
                                                                    className: "form-control",
                                                                    value: input.confirmPassword.trim(),
                                                                    onChange: onInputChange,
                                                                    onBlur: validateInput
                                                                }),
                                                                error.confirmPassword && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: error.confirmPassword
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (ResetPassword_module_default()).formGroup,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                children: "Update Password"
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
                    }) : console.log("dsd")
                ]
            });
        })
    });
};
async function getServerSideProps(context) {
    const id = context.query.id;
    const { db  } = await connectToDatabase();
    const data = await db.collection("users").find({
        _id: (0,external_mongodb_namespaceObject.ObjectId)(id)
    }).toArray();
    const properties = JSON.parse(JSON.stringify(data));
    console.log(data);
    return {
        props: {
            properties: properties
        }
    };
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664], () => (__webpack_exec__(7071)));
module.exports = __webpack_exports__;

})();