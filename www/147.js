(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/ykcub6au.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/ykcub6au.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonText", function() { return Text; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_50fe9317_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-50fe9317.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-50fe9317.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */


var Text = /** @class */ (function () {
    function Text() {
    }
    Text.prototype.hostData = function () {
        return {
            class: Object(_chunk_50fe9317_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.color)
        };
    };
    Text.prototype.render = function () {
        return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Object.defineProperty(Text, "is", {
        get: function () { return "ion-text"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text, "style", {
        get: function () { return ".ion-color.sc-ion-text-h{color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    return Text;
}());



/***/ })

}]);
//# sourceMappingURL=147.js.map