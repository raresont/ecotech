(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "./src/app/pages/tutorial/tutorial-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _tutorial__WEBPACK_IMPORTED_MODULE_2__["TutorialPage"]
    }
];
var TutorialPageRoutingModule = /** @class */ (function () {
    function TutorialPageRoutingModule() {
    }
    TutorialPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TutorialPageRoutingModule);
    return TutorialPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.html":
/*!**********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color='primary' (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\">\r\n    <ion-slide>\r\n      <img src=\"assets/img/ica-slidebox-img-1.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">\r\n        \r\n        <b>Smart Pay</b>\r\n      </h2>\r\n      <p>\r\n        This is \r\n        <b>the Smart Pay unit app</b> and it is a practical preview of the communication with NFC where you get your receipts and manage them.\r\n      </p>\r\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\r\n        Continue\r\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n      </ion-button>\r\n    </ion-slide>\r\n<!---\r\n    <ion-slide>\r\n      <img src=\"assets/img/ica-slidebox-img-2.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">What you do with this App?</h2>\r\n      <p>You know the state of the units in the hospital and send commands to them in case of emergency.\r\n        Here you also view the statistics about the units.\r\n        <ion-button fill=\"clear\" (click)=\"startApp()\">\r\n            Continue\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n    </ion-slide>\r\n  -->\r\n  </ion-slides>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial-routing.module */ "./src/app/pages/tutorial/tutorial-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TutorialModule = /** @class */ (function () {
    function TutorialModule() {
    }
    TutorialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_4__["TutorialPageRoutingModule"]
            ],
            declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]],
            entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]],
        })
    ], TutorialModule);
    return TutorialModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-tutorial ion-toolbar {\n  --background: transparent;\n  --border-color: transparent; }\n\npage-tutorial .swiper-slide {\n  display: block; }\n\npage-tutorial .slide-title {\n  margin-top: 2.8rem; }\n\npage-tutorial .slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0; }\n\npage-tutorial b {\n  font-weight: 500; }\n\npage-tutorial p {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646B; }\n\npage-tutorial p b {\n    color: #000000; }\n"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.ts":
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = /** @class */ (function () {
    function TutorialPage(menu, router, storage) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.router
            .navigateByUrl('/app/tabs/(schedule:schedule)')
            .then(function () { return _this.storage.set('ion_did_tutorial', 'true'); });
    };
    TutorialPage.prototype.onSlideChangeStart = function (event) {
        var _this = this;
        event.target.isEnd().then(function (isEnd) {
            _this.showSkip = !isEnd;
        });
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
                _this.router.navigateByUrl('/app/tabs/(schedule:schedule)');
            }
        });
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Slides"])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-tutorial',
            template: __webpack_require__(/*! ./tutorial.html */ "./src/app/pages/tutorial/tutorial.html"),
            styles: [__webpack_require__(/*! ./tutorial.scss */ "./src/app/pages/tutorial/tutorial.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module.js.map