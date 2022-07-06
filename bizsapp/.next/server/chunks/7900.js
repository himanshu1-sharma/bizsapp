"use strict";
exports.id = 7900;
exports.ids = [7900];
exports.modules = {

/***/ 9328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ connectToDatabase)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
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
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(uri, {
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


/***/ }),

/***/ 8807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ pageURL)
/* harmony export */ });
const pageURL = "http://localhost:3001/ecardDesign/EcardDesign?id=";



/***/ })

};
;