(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/skzvaxms.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/skzvaxms.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonAnchor, IonBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAnchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackButton", function() { return BackButton; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_50fe9317_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-50fe9317.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-50fe9317.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */


var Anchor = /** @class */ (function () {
    function Anchor() {
    }
    Anchor.prototype.hostData = function () {
        return {
            class: Object(_chunk_50fe9317_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.color),
            'ion-activatable': true
        };
    };
    Anchor.prototype.render = function () {
        var _this = this;
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { href: this.href, onClick: function (ev) { return Object(_chunk_50fe9317_js__WEBPACK_IMPORTED_MODULE_2__["e"])(_this.win, _this.href, ev, _this.routerDirection); } }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(Anchor, "is", {
        get: function () { return "ion-anchor"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "routerDirection": {
                    "type": String,
                    "attr": "router-direction"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "style", {
        get: function () { return ".sc-ion-anchor-h{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}.ion-color.sc-ion-anchor-h{color:var(--ion-color-base)}a.sc-ion-anchor{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Anchor;
}());
var BackButton = /** @class */ (function () {
    function BackButton() {
    }
    BackButton.prototype.onClick = function (ev) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var nav, _a;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nav = this.el.closest('ion-nav');
                        ev.preventDefault();
                        _a = nav;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, nav.canGoBack()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/, nav.pop({ skipIfBusy: true })];
                        }
                        return [2 /*return*/, Object(_chunk_50fe9317_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.win, this.defaultHref, ev, 'back')];
                }
            });
        });
    };
    BackButton.prototype.hostData = function () {
        var showBackButton = this.defaultHref !== undefined;
        return {
            class: Object.assign({}, Object(_chunk_50fe9317_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.color), { 'button': true, 'show-back-button': showBackButton }),
            'ion-activatable': true,
        };
    };
    BackButton.prototype.render = function () {
        var _this = this;
        var backButtonIcon = this.icon || this.config.get('backButtonIcon', 'arrow-back');
        var backButtonText = this.text !== undefined ? this.text : this.config.get('backButtonText', 'Back');
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", class: "back-button-native", onClick: function (ev) { return _this.onClick(ev); } }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "back-button-inner" }, backButtonIcon && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: backButtonIcon, lazy: false }), this.mode === 'ios' && backButtonText && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "button-text" }, backButtonText), this.mode === 'md' && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null))));
    };
    Object.defineProperty(BackButton, "is", {
        get: function () { return "ion-back-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
                },
                "defaultHref": {
                    "type": String,
                    "attr": "default-href"
                },
                "el": {
                    "elementRef": true
                },
                "icon": {
                    "type": String,
                    "attr": "icon"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "text": {
                    "type": String,
                    "attr": "text"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "style", {
        get: function () { return ".sc-ion-back-button-md-h{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:currentColor}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.back-button-native.sc-ion-back-button-md{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.back-button-inner.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.sc-ion-back-button-md{margin:1px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;background-color:transparent;font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.back-button-native.activated.sc-ion-back-button-md{opacity:.4}ion-icon.sc-ion-back-button-md{padding-right:.3em;margin:0 6px;font-size:24px;font-weight:400;line-height:.67;text-align:start;pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return BackButton;
}());



/***/ })

}]);
//# sourceMappingURL=103.js.map