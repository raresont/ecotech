(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-message-message-module~pages-tabs-page-tabs-page-module"],{

/***/ "./src/app/pages/message/message-detail-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/message/message-detail-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SessionMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMessagePageRoutingModule", function() { return SessionMessagePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page */ "./src/app/pages/message/message.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_2__["MessagePage"]
    }
];
var SessionMessagePageRoutingModule = /** @class */ (function () {
    function SessionMessagePageRoutingModule() {
    }
    SessionMessagePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SessionMessagePageRoutingModule);
    return SessionMessagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/message/message.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/message/message.module.ts ***!
  \*************************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.page */ "./src/app/pages/message/message.page.ts");
/* harmony import */ var _message_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-detail-routing.module */ "./src/app/pages/message/message-detail-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






///import { File } from '@ionic-native/file';
//import { FileTransfer } from '@ionic-native/file-transfer';
//import { DocumentViewer } from '@ionic-native/document-viewer';
var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_4__["MessagePage"]
    }
];
var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _message_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionMessagePageRoutingModule"]
            ],
            declarations: [_message_page__WEBPACK_IMPORTED_MODULE_4__["MessagePage"]]
            //  ,
            // providers :[    File,
            //   DocumentViewer,
            //  FileTransfer]
        })
    ], MessagePageModule);
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/message/message.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/message/message.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Message\" defaultHref=\"/app/tabs/(schedule:schedule)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{session?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"session\">\n    <div class=\"support-logo\" id=\"centeredTopImg\" style=\"text-align: center;\">\n      <img id=\"centeredTopImg\" src=\"assets/img/Lidl-Logo.svg.png\" alt=\"Ionic Logo\" style=\"border-radius:50%;\">\n    </div>\n    <h1 class=\"centeredContent\" style=\"text-align: center;font-size:24px;\">\n     <b> <i> Cluj-Napoca, Str.Regele Ferdinand, Nr. 22-26 </i> </b>\n  <!---    {{session.tracks[0]}} -->\n    </h1>\n\n      <h1 class=\"centeredContent\" style=\"text-align: center;font-size:15px;\">\n          {{session.timeStart}}\n      <!---    {{session.tracks[0]}} -->\n      </h1>\n   <!---   <p>{{session.location}}</p> -->\n   <ion-grid>\n   <ion-item *ngFor=\"let track of session.tracks\" [attr.track]=\"track.name | lowercase\">\n\n  <!--- <div class=\"item row\"> -->\n      <ion-row>\n     <!---  <span float-left class=\"col col-50\"col-3> -->\n          <ion-col col-3>{{track.name}}</ion-col>\n\n      <!---     </span>\n      <span float-right class=\"col col-50\" offset-3 col-3> -->\n          <ion-col col-3 offset-3>{{track.price}}</ion-col>\n        <!---     \n          </span>\n   </div>\n  --><hr>\n</ion-row>\n\n<hr>\n   </ion-item>\n\n   <ion-row>\n    <ion-col col-3></ion-col>\n    <ion-col col-3>         Total</ion-col>\n        <ion-col col-3 offset-3>{{track.total}}</ion-col>\n  </ion-row>\n\n  </ion-grid>\n  \n<script></script>\n\n    <form #submitForm=\"ngForm\" novalidate (ngSubmit)=\"submit(submitForm)\">\n      <!---\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Enter a message to be displayed on the unit screen</ion-label>\n          <ion-textarea [(ngModel)]=\"supportMessage\" name=\"supportQuestion\" #supportQuestion=\"ngModel\" rows=\"6\" required></ion-textarea>\n        </ion-item>\n      </ion-list>\n  \n      <ion-text color=\"danger\">\n        <p [hidden]=\"supportQuestion.valid || submitted === false\" padding-left>\n          A message is required\n        </p>\n      </ion-text>\n    -->\n      <div padding>\n     <!---   <ion-button expand=\"block\" type=\"submit\" style=\"background:greenyellow !important;\">Receip list(PDF)</ion-button>\n     --> <ion-button expand=\"block\" (click)=\"navigate('/app/tabs/(schedule:schedule)')\">View All Receipts</ion-button>\n      </div>\n    </form>\n    <img id=\"centeredTopImg\" src=\"assets/img/Screenshot_5.png\" alt=\"Ionic Logo\">\n  </div>\n</ion-content>\n<!---\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js\"></script>\n\n-->"

/***/ }),

/***/ "./src/app/pages/message/message.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/message/message.page.ts ***!
  \***********************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { DocumentViewer,DocumentViewerOptions  } from '@ionic-native/document-viewer';

///import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
//import { FileOpener } from '@ionic-native/file-opener';
var MessagePage = /** @class */ (function () {
    function MessagePage(dataProvider, route, router
    // ,private document: DocumentViewer,
    // private file: File,
    // private transfer: FileTransfer
    ) {
        this.dataProvider = dataProvider;
        this.route = route;
        this.router = router;
    }
    MessagePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("t");
        this.dataProvider.load().subscribe(function (data) {
            if (data //&&
            //   data.name// &&
            //   data.schedule[0] &&
            //  data.schedule[0].groups
            ) {
                var sessionId = _this.route.snapshot.paramMap.get('id').replace("%20", " ");
                //     console.log(sessionId);
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            console.log("failed here");
                            if (session && session.name === sessionId) {
                                console.log(sessionId);
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    MessagePage.prototype.generatePDF = function () {
        // const options: DocumentViewerOptions = {
        //   title: 'My PDF'
        //  }
        // this.document.viewDocument('assets/img/bon_bun.pdf', 'application/pdf', options);
    };
    MessagePage.prototype.navigate = function (url) {
        return this.router.navigateByUrl(url);
    };
    MessagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message',
            template: __webpack_require__(/*! ./message.page.html */ "./src/app/pages/message/message.page.html")
        }),
        __metadata("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_1__["ConferenceData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            // ,private document: DocumentViewer,
            // private file: File,
            // private transfer: FileTransfer
        ])
    ], MessagePage);
    return MessagePage;
}());



/***/ }),

/***/ "./src/app/providers/conference-data.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/*! exports provided: ConferenceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenceData", function() { return ConferenceData; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConferenceData = /** @class */ (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data);
        }
        else {
            return this.http
                .get('assets/data/data.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.processData, this));
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data;
        this.data.tracks = [];
        this.data.tracks1 = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                    if (session.tracks1) {
                        session.tracks1.forEach(function (track1) {
                            if (_this.data.tracks1.indexOf(track1) < 0) {
                                _this.data.tracks1.push(track1);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        }));
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            //    var test: any = {};
            //    test.tracks = data.tracks;
            //    test.location = data.location;
            //  return data.tracks.sort();
            return data.tracks1.sort();
            //  return test;
        }));
    };
    ConferenceData.prototype.getTracksWithId = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var angular;
            return angular.extend(data.tracks, data.id).sort();
        }));
    };
    ConferenceData.prototype.getTrackId = function (id) {
        return this.load().pipe(
        //  map(data => data.filter(data => data.id == id)
        );
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map;
        }));
    };
    ConferenceData = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])
    ], ConferenceData);
    return ConferenceData;
}());



/***/ })

}]);
//# sourceMappingURL=pages-message-message-module~pages-tabs-page-tabs-page-module.js.map