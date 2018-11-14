(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Core CSS required for Ionic components to work properly */\nhtml.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}\nhtml.md{--ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif}\nhtml{--ion-font-family: var(--ion-default-font)}\nbody.backdrop-no-scroll{overflow:hidden}\n.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56,128,255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}\n.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;--ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important}\n.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #7044ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112,68,255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important}\n.ion-color-success{--ion-color-base: var(--ion-color-success, #10dc60) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 16,220,96) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;--ion-color-tint: var(--ion-color-success-tint, #28e070) !important}\n.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffce00) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255,206,0) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important}\n.ion-color-danger{--ion-color-base: var(--ion-color-danger, #f04141) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 240,65,65) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;--ion-color-tint: var(--ion-color-danger-tint, #f25454) !important}\n.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}\n.ion-color-medium{--ion-color-base: var(--ion-color-medium, #989aa2) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 152,154,162) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;--ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important}\n.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}\n*::-moz-selection{background:var(--ion-color-shade, rgba(0,0,0,0.3))}\n*::selection{background:var(--ion-color-shade, rgba(0,0,0,0.3))}\n.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}\nion-route,ion-route-redirect,ion-router,ion-animation-controller,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden,[hidden]{display:none !important}\n.ion-page-invisible{opacity:0}\nhtml.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}\nhtml{--ion-safe-area-top: var(--ion-statusbar-padding)}\n@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}\n@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}\n/* Basic CSS for apps built with Ionic */\naudio,canvas,progress,video{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\nb,strong{font-weight:bold}\nimg{max-width:100%;border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{height:1px;border-width:0;box-sizing:content-box}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}\nlabel,input,select,textarea{font-family:inherit;line-height:normal}\ntextarea{overflow:auto;height:auto;font:inherit;color:inherit}\ntextarea::-webkit-input-placeholder{padding-left:2px}\ntextarea:-ms-input-placeholder{padding-left:2px}\ntextarea::-ms-input-placeholder{padding-left:2px}\ntextarea::placeholder{padding-left:2px}\nform,input,optgroup,select{margin:0;font:inherit;color:inherit}\nhtml input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button}\na,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}\na ion-label,button ion-label{pointer-events:none}\nbutton{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}\n[tappable]{cursor:pointer}\na[disabled],button[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\ninput[type=\"checkbox\"],input[type=\"radio\"]{padding:0;box-sizing:border-box}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}\nhtml{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}\nbody{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}\nhtml{font-family:var(--ion-font-family)}\na{background-color:transparent;color:var(--ion-color-primary, #3880ff)}\nh1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}\nh1{margin-top:20px;font-size:var(--ion-header-size, 26px)}\nh2{margin-top:18px;font-size:calc(var(--ion-header-size, 26px) - var(--ion-header-step, 2px))}\nh3{font-size:calc(var(--ion-header-size, 26px) - var(--ion-header-step, 2px) * 2)}\nh4{font-size:calc(var(--ion-header-size, 26px) - var(--ion-header-step, 2px) * 3)}\nh5{font-size:calc(var(--ion-header-size, 26px) - var(--ion-header-step, 2px) * 4)}\nh6{font-size:calc(var(--ion-header-size, 26px) - var(--ion-header-step, 2px) * 5)}\nsmall{font-size:75%}\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\nsup{top:-.5em}\nsub{bottom:-.25em}\n/* Optional CSS utils that can be commented out */\n[no-padding]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding:0}\n[padding]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding:var(--ion-padding, 16px)}\n[padding-top]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}\n[padding-start]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}\n[padding-end]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n[padding-bottom]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n[padding-vertical]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n[padding-horizontal]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n[no-margin]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin:0}\n[margin]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin:var(--ion-margin, 16px)}\n[margin-top]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}\n[margin-start]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}\n[margin-end]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n[margin-bottom]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n[margin-vertical]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n[margin-horizontal]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n[float-left]{float:left !important}\n[float-right]{float:right !important}\n[float-start]{float:left !important}\n[float-end]{float:right !important}\n@media (min-width: 576px){[float-sm-left]{float:left !important}[float-sm-right]{float:right !important}[float-sm-start]{float:left !important}[float-sm-end]{float:right !important}}\n@media (min-width: 768px){[float-md-left]{float:left !important}[float-md-right]{float:right !important}[float-md-start]{float:left !important}[float-md-end]{float:right !important}}\n@media (min-width: 992px){[float-lg-left]{float:left !important}[float-lg-right]{float:right !important}[float-lg-start]{float:left !important}[float-lg-end]{float:right !important}}\n@media (min-width: 1200px){[float-xl-left]{float:left !important}[float-xl-right]{float:right !important}[float-xl-start]{float:left !important}[float-xl-end]{float:right !important}}\n[text-center]{text-align:center !important}\n[text-justify]{text-align:justify !important}\n[text-start]{text-align:start !important}\n[text-end]{text-align:end !important}\n[text-left]{text-align:left !important}\n[text-right]{text-align:right !important}\n[text-nowrap]{white-space:nowrap !important}\n[text-wrap]{white-space:normal !important}\n@media (min-width: 576px){[text-sm-center]{text-align:center !important}[text-sm-justify]{text-align:justify !important}[text-sm-start]{text-align:start !important}[text-sm-end]{text-align:end !important}[text-sm-left]{text-align:left !important}[text-sm-right]{text-align:right !important}[text-sm-nowrap]{white-space:nowrap !important}[text-sm-wrap]{white-space:normal !important}}\n@media (min-width: 768px){[text-md-center]{text-align:center !important}[text-md-justify]{text-align:justify !important}[text-md-start]{text-align:start !important}[text-md-end]{text-align:end !important}[text-md-left]{text-align:left !important}[text-md-right]{text-align:right !important}[text-md-nowrap]{white-space:nowrap !important}[text-md-wrap]{white-space:normal !important}}\n@media (min-width: 992px){[text-lg-center]{text-align:center !important}[text-lg-justify]{text-align:justify !important}[text-lg-start]{text-align:start !important}[text-lg-end]{text-align:end !important}[text-lg-left]{text-align:left !important}[text-lg-right]{text-align:right !important}[text-lg-nowrap]{white-space:nowrap !important}[text-lg-wrap]{white-space:normal !important}}\n@media (min-width: 1200px){[text-xl-center]{text-align:center !important}[text-xl-justify]{text-align:justify !important}[text-xl-start]{text-align:start !important}[text-xl-end]{text-align:end !important}[text-xl-left]{text-align:left !important}[text-xl-right]{text-align:right !important}[text-xl-nowrap]{white-space:nowrap !important}[text-xl-wrap]{white-space:normal !important}}\n[text-uppercase]{text-transform:uppercase !important}\n[text-lowercase]{text-transform:lowercase !important}\n[text-capitalize]{text-transform:capitalize !important}\n@media (min-width: 576px){[text-sm-uppercase]{text-transform:uppercase !important}[text-sm-lowercase]{text-transform:lowercase !important}[text-sm-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 768px){[text-md-uppercase]{text-transform:uppercase !important}[text-md-lowercase]{text-transform:lowercase !important}[text-md-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 992px){[text-lg-uppercase]{text-transform:uppercase !important}[text-lg-lowercase]{text-transform:lowercase !important}[text-lg-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 1200px){[text-xl-uppercase]{text-transform:uppercase !important}[text-xl-lowercase]{text-transform:lowercase !important}[text-xl-capitalize]{text-transform:capitalize !important}}\n[align-self-start]{align-self:flex-start !important}\n[align-self-end]{align-self:flex-end !important}\n[align-self-center]{-ms-grid-row-align:center !important;align-self:center !important}\n[align-self-stretch]{-ms-grid-row-align:stretch !important;align-self:stretch !important}\n[align-self-baseline]{align-self:baseline !important}\n[align-self-auto]{-ms-grid-row-align:auto !important;align-self:auto !important}\n[wrap]{flex-wrap:wrap !important}\n[nowrap]{flex-wrap:nowrap !important}\n[wrap-reverse]{flex-wrap:wrap-reverse !important}\n[justify-content-start]{justify-content:flex-start !important}\n[justify-content-center]{justify-content:center !important}\n[justify-content-end]{justify-content:flex-end !important}\n[justify-content-around]{justify-content:space-around !important}\n[justify-content-between]{justify-content:space-between !important}\n[justify-content-evenly]{justify-content:space-evenly !important}\n[align-items-start]{align-items:flex-start !important}\n[align-items-center]{align-items:center !important}\n[align-items-end]{align-items:flex-end !important}\n[align-items-stretch]{align-items:stretch !important}\n[align-items-baseline]{align-items:baseline !important}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56,128,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12,209,232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112,68,255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16,220,96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255,255,255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255,206,0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245,61,61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34,34,34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255,255,255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152,154,162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244,244,244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9; }\n\n.ion-color-favorite {\n  --ion-color-base: #69bb7b;\n  --ion-color-base-rgb: 105,187,123;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255,255,255;\n  --ion-color-shade: #5ca56c;\n  --ion-color-tint: #78c288; }\n\n.ion-color-twitter {\n  --ion-color-base: #1da1f4;\n  --ion-color-base-rgb: 29,161,244;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255,255,255;\n  --ion-color-shade: #1a8ed7;\n  --ion-color-tint: #34aaf5; }\n\n.ion-color-google {\n  --ion-color-base: #dc4a38;\n  --ion-color-base-rgb: 220,74,56;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255,255,255;\n  --ion-color-shade: #c24131;\n  --ion-color-tint: #e05c4c; }\n\n.ion-color-vimeo {\n  --ion-color-base: #23b6ea;\n  --ion-color-base-rgb: 35,182,234;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255,255,255;\n  --ion-color-shade: #1fa0ce;\n  --ion-color-tint: #39bdec; }\n\n.ion-color-facebook {\n  --ion-color-base: #3b5998;\n  --ion-color-base-rgb: 59,89,152;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255,255,255;\n  --ion-color-shade: #344e86;\n  --ion-color-tint: #4f6aa2; }\n\n:root {\n  --ion-headings-font-weight: 300; }\n\n.md {\n  --ion-toolbar-background-color:        var(--ion-color-primary);\n  --ion-toolbar-color-active:            #fff;\n  --ion-toolbar-text-color:              #fff; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\flutter-apps\ionic-conference-app - Copy\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! D:\flutter-apps\ionic-conference-app - Copy\src\global.scss */"./src/global.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map