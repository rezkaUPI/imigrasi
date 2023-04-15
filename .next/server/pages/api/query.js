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
exports.id = "pages/api/query";
exports.ids = ["pages/api/query"];
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

/***/ "(api)/./pages/api/query.js":
/*!****************************!*\
  !*** ./pages/api/query.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_db__WEBPACK_IMPORTED_MODULE_0__);\n// /pages/api/query.js\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const { table  } = req.query;\n        if (!table) {\n            return res.status(400).json({\n                message: \"Table name is required.\"\n            });\n        }\n        try {\n            const { rows  } = await (0,_db__WEBPACK_IMPORTED_MODULE_0__.query)(`SELECT * FROM ${table}`);\n            res.status(200).json(rows);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n            res.status(500).json({\n                message: \"Error executing query.\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0JBQXNCO0FBQ1c7QUFFbEIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsSUFBSUYsS0FBSztRQUMzQixJQUFJLENBQUNLLE9BQU87WUFDVixPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQTBCO1FBQ25FLENBQUM7UUFFRCxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNVCwwQ0FBS0EsQ0FBQyxDQUFDLGNBQWMsRUFBRUssTUFBTSxDQUFDO1lBQ3JERixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtRQUN2QixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDeENQLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBeUI7UUFDM0Q7SUFDRixPQUFPO1FBQ0xMLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFzQjtJQUN4RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltaWdyYXNpLy4vcGFnZXMvYXBpL3F1ZXJ5LmpzP2M3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL3BhZ2VzL2FwaS9xdWVyeS5qc1xuaW1wb3J0IHsgcXVlcnkgfSBmcm9tICcuLi8uLi9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgeyB0YWJsZSB9ID0gcmVxLnF1ZXJ5O1xuICAgIGlmICghdGFibGUpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdUYWJsZSBuYW1lIGlzIHJlcXVpcmVkLicgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcXVlcnkoYFNFTEVDVCAqIEZST00gJHt0YWJsZX1gKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJvd3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleGVjdXRpbmcgcXVlcnk6JywgZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgZXhlY3V0aW5nIHF1ZXJ5LicgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZC4nIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRhYmxlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJyb3dzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/query.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/query.js"));
module.exports = __webpack_exports__;

})();