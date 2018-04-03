webpackHotUpdate("main",{

/***/ "./src/components/Charts.tsx":
/*!***********************************!*\
  !*** ./src/components/Charts.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Charts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bizcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bizcharts */ "bizcharts");
/* harmony import */ var bizcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bizcharts__WEBPACK_IMPORTED_MODULE_1__);
// antv/g2: BizCharts || viser, ECharts: 

//import BizCharts from 'bizcharts';

const data = [
    { year: '1951', sales: 38 },
    { year: '1952', sales: 52 },
    { year: '1956', sales: 61 },
    { year: '1957', sales: 145 },
    { year: '1958', sales: 48 },
    { year: '1959', sales: 38 },
    { year: '1960', sales: 38 },
    { year: '1962', sales: 38 },
];
const cols = {
    'sales': { tickInterval: 20 },
};
class Charts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](bizcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"], { height: 400, data: data, scale: cols, forceFit: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](bizcharts__WEBPACK_IMPORTED_MODULE_1__["Axis"], { name: "year" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](bizcharts__WEBPACK_IMPORTED_MODULE_1__["Axis"], { name: "value" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](bizcharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { crosshairs: { type: "y" } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](bizcharts__WEBPACK_IMPORTED_MODULE_1__["Geom"], { type: "interval", position: "year*sales" })));
    }
}


/***/ })

})
//# sourceMappingURL=main.9dfe6c8fad24887301ab.hot-update.js.map