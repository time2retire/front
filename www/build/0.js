webpackJsonp([0],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { NgForm } from '@angular/forms';
// import { WelcomePage } from '../welcome/welcome';
// import { SavedPage } from '../saved/saved';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, _user, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._user = _user;
        this._http = _http;
        this.name_url = "https://nameless-wave-33070.herokuapp.com/api/appUsers?access_token=";
        //user: this._user
        this.token = sessionStorage.getItem('token');
    }
    // getName() {
    //   console.log(this.name_url + this.token);
    //   return this._http.get(this.name_url + this.token);
    // }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(this._user.user);
    };
    ProfilePage.prototype.logoutUser = function (user) {
        var _this = this;
        this.navCtrl.setRoot("WelcomePage")
            .then(function () {
            _this._user.logout(user);
            sessionStorage.clear();
            console.log("User is logged out", user);
        });
    };
    ProfilePage.prototype.mySavedCharts = function () {
        this.navCtrl.setRoot("SavedPage");
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/waynelester/Dropbox/Coding/Time2Retire/front/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle color="primary">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 align="center">Hello, {{_user.user.firstName}}!</h1>\n  <ion-grid>\n\n    <div *ngIf="_user.user">\n      <ion-row>\n        Name: {{ _user.user.firstName }} {{ _user.user.lastName }}\n      </ion-row>\n      <p></p>\n      <div>Email: {{_user.user.email }} </div>\n      <p></p>\n      <ion-row>\n        <div>Birthday: {{_user.user.birthday | date }}</div>\n      </ion-row>\n      <p></p>\n      <ion-row>\n        <div>Annual Income: </div>\n      </ion-row>\n      <div>\n        <p></p>\n        <ion-col col-6>\n          <button ion-button color="secondary" (click)="mySavedCharts()">My Saved Charts</button>\n        </ion-col>\n        <ion-col col-6>\n          <button align="center" ion-button color="danger" (click)="logoutUser(_user.user)">Logout</button>\n        </ion-col>\n      </div>\n    </div>\n  </ion-grid>\n  <!--<img src="https://i.imgur.com/yebyUGP.png"> -->\n</ion-content>'/*ion-inline-end:"/Users/waynelester/Dropbox/Coding/Time2Retire/front/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* User */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map