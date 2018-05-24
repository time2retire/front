webpackJsonp([5],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.newUser = {
            firstName: '',
            lastName: '',
            userName: '',
            birthday: '',
            email: '',
            password: ''
        };
        this.signupAttempt = false;
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.newSignup = function () {
        var _this = this;
        return this.user.signupCustom(this.newUser).subscribe(function (newUser) {
            console.log(newUser, 'Signup Successful');
            sessionStorage.setItem('token', newUser.token);
            sessionStorage.setItem('userId', newUser.userId);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4____["b" /* MainPage */]);
        }, function (err) {
            _this.signupAttempt = true;
            var toast = _this.toastCtrl.create({
                message: 'Please fill out all details',
                duration: 2000,
                position: 'top'
            });
            toast.present();
            _this.newUser.firstName = '';
            _this.newUser.lastName = '';
            _this.newUser.userName = '';
            _this.newUser.birthday = '';
            _this.newUser.email = '';
            _this.newUser.password = '';
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/waynelester/Dropbox/Coding/Time2Retire/front/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <form (submit)="doSignup()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      \n      Want to add a Username? Here you go:\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n     \n\n      <ion-item>\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form> -->\n\n  <form (submit)=\'newSignup()\'>\n\n    <ion-list>\n\n      <div align=\'center\'>\n        <h5 *ngIf="signupAttempt" style="color: #ea6153;">Please fill out all details</h5>\n      </div>\n\n      <ion-item>\n        <ion-label fixed>First Name</ion-label>\n        <ion-input type=\'text\' [(ngModel)]=\'newUser.firstName\' name=\'firstName\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Last Name</ion-label>\n        <ion-input type=\'text\' [(ngModel)]=\'newUser.lastName\' name=\'lastName\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Username</ion-label>\n        <ion-input type=\'text\' [(ngModel)]=\'newUser.userName\' name=\'userName\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Birthday</ion-label>\n        <ion-input type=\'date\' [(ngModel)]=\'newUser.birthday\' name=\'birthday\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type=\'email\' [(ngModel)]=\'newUser.email\' name=\'email\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type=\'password\' [(ngModel)]=\'newUser.password\' name=\'password\'></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Sign Up</button>\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/waynelester/Dropbox/Coding/Time2Retire/front/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=5.js.map