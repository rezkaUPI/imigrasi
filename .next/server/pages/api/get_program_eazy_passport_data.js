"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get_program_eazy_passport_data";
exports.ids = ["pages/api/get_program_eazy_passport_data"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { Pool  } = __webpack_require__(/*! pg */ \"pg\");\nconst pool = new Pool({\n    user: \"postgres\",\n    host: \"localhost\",\n    database: \"imigrasi\",\n    password: \"\",\n    port: 5432\n});\nmodule.exports = {\n    query: (text, params)=>pool.query(text, params)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxLQUFJLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsT0FBTyxJQUFJRixLQUFLO0lBQ3BCRyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLE1BQU07QUFDUjtBQUVBQyxPQUFPQyxPQUFPLEdBQUc7SUFDZkMsT0FBTyxDQUFDQyxNQUFNQyxTQUFXVixLQUFLUSxLQUFLLENBQUNDLE1BQU1DO0FBQzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1pZ3Jhc2kvLi9kYi5qcz81NjY1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgUG9vbCB9ID0gcmVxdWlyZSgncGcnKTtcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgdXNlcjogJ3Bvc3RncmVzJyxcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIGRhdGFiYXNlOiAnaW1pZ3Jhc2knLFxuICBwYXNzd29yZDogJycsXG4gIHBvcnQ6IDU0MzIsXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHF1ZXJ5OiAodGV4dCwgcGFyYW1zKSA9PiBwb29sLnF1ZXJ5KHRleHQsIHBhcmFtcyksXG59OyJdLCJuYW1lcyI6WyJQb29sIiwicmVxdWlyZSIsInBvb2wiLCJ1c2VyIiwiaG9zdCIsImRhdGFiYXNlIiwicGFzc3dvcmQiLCJwb3J0IiwibW9kdWxlIiwiZXhwb3J0cyIsInF1ZXJ5IiwidGV4dCIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/get_program_eazy_passport_data.js":
/*!*****************************************************!*\
  !*** ./pages/api/get_program_eazy_passport_data.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_db__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        const result = await (0,_db__WEBPACK_IMPORTED_MODULE_0__.query)(\"SELECT * FROM program_eazy_passport ORDER BY tanggal\");\n        res.status(200).json(result.rows);\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            error: \"An error occurred while fetching data from the database\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0X3Byb2dyYW1fZWF6eV9wYXNzcG9ydF9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUNsQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNSiwwQ0FBS0EsQ0FBQztRQUMzQkcsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0YsT0FBT0csSUFBSTtJQUNsQyxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkTCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLE9BQU87UUFBMEQ7SUFDMUY7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1pZ3Jhc2kvLi9wYWdlcy9hcGkvZ2V0X3Byb2dyYW1fZWF6eV9wYXNzcG9ydF9kYXRhLmpzPzE1NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgfSBmcm9tICcuLi8uLi9kYic7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHByb2dyYW1fZWF6eV9wYXNzcG9ydCBPUkRFUiBCWSB0YW5nZ2FsJyk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQucm93cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UnIH0pO1xuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJxdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwicm93cyIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/get_program_eazy_passport_data.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get_program_eazy_passport_data.js"));
module.exports = __webpack_exports__;

})();