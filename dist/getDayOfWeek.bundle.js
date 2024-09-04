"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["getDayOfWeek"],{

/***/ "./src/getDayOfWeek.js":
/*!*****************************!*\
  !*** ./src/getDayOfWeek.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDayOfWeek: () => (/* binding */ getDayOfWeek)
/* harmony export */ });
function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const options = { weekday: "long" };
  return date.toLocaleDateString("en-US", options);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getDayOfWeek.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGF5T2ZXZWVrLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXlPZldlZWsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtkYXk6IFwibG9uZ1wiIH07XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9