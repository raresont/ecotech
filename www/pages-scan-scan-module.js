(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"],{

/***/ "./src/app/pages/scan/scan.html":
/*!**************************************!*\
  !*** ./src/app/pages/scan/scan.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Get the receipt</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n <!--- <h1 id=\"topText\">NFC is {{status}}</h1> -->\n <img  id=\"bgTopNoChange\" [src]=\"changeableBG\" />\n\n  <!--- <div id=\"centerButton\"> -->\n    <style>\n  \n    </style>\n   <!--- <div id=\"cf\"> -->\n     <!-- <img class=\"bottom test\" src=\"Power_Button.png\" /> -->\n     <img class=\"top\" id=\"top\" [src]=\"picToView\" (click)=\"changeImage()\" />\n    <!--- <img src=\"assets/img/NCF_ONN.png\" > -->\n    <!-- -</div> -->\n    \n    \n  <!--  </div> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/scan/scan.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.module.ts ***!
  \*******************************************/
/*! exports provided: ScanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scan */ "./src/app/pages/scan/scan.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { OpenNativeSettings } from '@ionic-native/open-native-settings';
//import { OpenNativeSettings } from '@ionic-native/open-native-settings';
//import { NFC, Ndef } from '@ionic-native/nfc';
var routes = [
    {
        path: '',
        component: _scan__WEBPACK_IMPORTED_MODULE_5__["ScanPage"]
    }
];
var ScanPageModule = /** @class */ (function () {
    function ScanPageModule() {
    }
    ScanPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_scan__WEBPACK_IMPORTED_MODULE_5__["ScanPage"]]
            // ,providers:[OpenNativeSettings,NFC, Ndef]
        })
    ], ScanPageModule);
    return ScanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/scan/scan.scss":
/*!**************************************!*\
  !*** ./src/app/pages/scan/scan.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bgTopNoChange {\n  width: 100vh;\n  z-index: 0;\n  position: fixed;\n  margin-left: auto;\n  margin-right: auto; }\n\n#topText {\n  top: 10%;\n  width: 20vh;\n  position: relative;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n#centerButton1 {\n  text-align: center;\n  width: 50vh;\n  border: 0px;\n  padding: 0px; }\n\n#cf {\n  position: relative;\n  top: 50%; }\n\n#top {\n  position: relative;\n  top: 60%;\n  border-radius: 50%;\n  z-index: 1;\n  display: block;\n  width: 25vh;\n  height: 25vh;\n  margin-left: auto;\n  margin-right: auto;\n  transition: opacity 1s ease-in-out; }\n\n#top:target {\n  opacity: 0; }\n\n@-webkit-keyframes glow {\n  from {\n    box-shadow: 0 0 10px -10px #aef4af; }\n  to {\n    box-shadow: 0 0 10px 10px #aef4af; } }\n\n@keyframes glow {\n  from {\n    box-shadow: 0 0 10px -10px #aef4af; }\n  to {\n    box-shadow: 0 0 10px 10px #aef4af; } }\n\n.test {\n  border-radius: 50%;\n  background-color: #ccc;\n  -webkit-animation: glow 1s infinite alternate;\n          animation: glow 1s infinite alternate; }\n"

/***/ }),

/***/ "./src/app/pages/scan/scan.ts":
/*!************************************!*\
  !*** ./src/app/pages/scan/scan.ts ***!
  \************************************/
/*! exports provided: ScanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPage", function() { return ScanPage; });
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




//import { OpenNativeSettings } from '@ionic-native/open-native-settings';
//import { NFC, Ndef } from '@ionic-native/nfc';
//import { File } from '@ionic-native/file';
var ScanPage = /** @class */ (function () {
    function ScanPage(menu, router, storage
    //  ,private file: File
    //,
    //  private openNativeSettings: OpenNativeSettings,
    // private nfc: NFC
    //,
    // private ndef: Ndef
    ) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
        this.picToView = "assets/img/NFC_OFF.png";
        this.changeableBG = "assets/img/BG_OFF.png";
        this.status = "OFF";
        /*
            this.nfc.addNdefListener(() => {
              console.log('successfully attached ndef listener');
            }, (err) => {
              console.log('error attaching ndef listener', err);
            }).subscribe((event) => {
              console.log('received ndef message. the tag contains: ', event.tag);
              console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
            
           //   let message = this.ndef.textRecord('Hello world');
            //  this.nfc.share([message]).then(onSuccess).catch(onError);
            }
            );
        
        */
    }
    ScanPage.prototype.startApp = function () {
        var _this = this;
        this.router
            .navigateByUrl('/app/tabs/(schedule:schedule)')
            .then(function () { return _this.storage.set('ion_did_tutorial', 'true'); });
    };
    ScanPage.prototype.onSlideChangeStart = function (event) {
        var _this = this;
        event.target.isEnd().then(function (isEnd) {
            _this.showSkip = !isEnd;
        });
    };
    ScanPage.prototype.ionViewWillEnter = function () {
        //problems
        //  this.picToView="assets/img/NCF_OFF.png";
        var _this = this;
        this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
                _this.router.navigateByUrl('/app/tabs/(schedule:schedule)');
            }
        });
        this.menu.enable(false);
    };
    ScanPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    ScanPage.prototype.changeImage = function () {
        var _this = this;
        this.element = document.getElementById("top");
        // if (true) 
        //   {
        setTimeout(function () {
            _this.picToView = "assets/img/NCF_ON.png";
            _this.changeableBG = "assets/img/BG_ON.png";
            //     this.element.src = "assets/img/Power_Button.png";
            _this.element.classList.add("test");
            _this.status = "ON";
            /*
            this.file.checkDir(
           //   this.file.dataDirectory
           
           this.file.externalRootDirectory
              , 'Download').then(
                _ => {console.log('Directory exists');
  
              this.file.readAsText(this.file.externalRootDirectory + "Download", "data.json")
              .then(
                (result) => {
                  this.dataFromFile = JSON.parse(result);
                }
              )
              
              }).catch(
                  err => console.log('Directory doesn\'t exist'));
     //       this.openNativeSettings.open("nfc_settings");
     */
        }, 100);
        setTimeout(function () {
            //  if (newState == -1) {
            //      alert('VIDEO HAS STOPPED');
            //  }
            _this.element.classList.remove("test");
            _this.picToView = "assets/img/progress-and-tick-icon-animation.gif";
            setTimeout(function () {
                //     this.dismiss();
                _this.router.navigateByUrl("/message/last");
            }, 3500);
        }, 2000);
        // }
        //  else 
        //  {
        //    this.element.src = "assets/img/Off_Button.png";
        //     this.element.classList.remove("test");
        //  }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Slides"])
    ], ScanPage.prototype, "slides", void 0);
    ScanPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scan',
            template: __webpack_require__(/*! ./scan.html */ "./src/app/pages/scan/scan.html"),
            styles: [__webpack_require__(/*! ./scan.scss */ "./src/app/pages/scan/scan.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
            //  ,private file: File
            //,
            //  private openNativeSettings: OpenNativeSettings,
            // private nfc: NFC
            //,
            // private ndef: Ndef
        ])
    ], ScanPage);
    return ScanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-scan-scan-module.js.map