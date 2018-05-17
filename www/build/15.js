webpackJsonp([15],{

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageModule", function() { return ChartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChartPageModule = /** @class */ (function () {
    function ChartPageModule() {
    }
    ChartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["ChartsModule"]
            ],
        })
    ], ChartPageModule);
    return ChartPageModule;
}());

//# sourceMappingURL=chart.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartPage = /** @class */ (function () {
    function ChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.x = 0;
        this.data1 = 3300 + this.x;
        this.data2 = 2055;
        this.barChartOptions = {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                onClick: function (e) { return e.stopPropagation(); }
            },
            scales: {
                yAxes: [{
                        id: 'U.S. Dollars',
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            max: 5000,
                            min: 0,
                            stepSize: 500
                        },
                        gridLines: {
                            display: false
                        }
                    }, {
                        id: 'Years',
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            max: 2060,
                            min: 2020,
                            stepSize: 5
                        },
                        gridLines: {
                            display: false
                        }
                    }]
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        // public increment(){
        //   this.x += 50
        //   this.barChartData[0].data[0]
        //   console.log(this.barChartData[0].data[0])
        // }
        this.barChartData = [
            { data: [this.data1], label: 'Monthly Benefit Amt.' },
            { data: [this.data2], label: 'Break-Even Year' }
        ];
    }
    // events
    ChartPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartPage.prototype.randomize = function () {
        this.x += 50;
        var _barChartData = new Array(this.barChartData.length);
        for (var i = 0; i < this.barChartData.length; i++) {
            _barChartData[i] = { data: new Array(this.barChartData[i].data.length), label: this.barChartData[i].label };
            for (var j = 0; j < this.barChartData[0].data.length; j++) {
                _barChartData[i].data[j] = this.x;
            }
        }
        this.barChartData = _barChartData;
    };
    ChartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartPage');
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chart',template:/*ion-inline-start:"/Users/waynelester/Dropbox/Coding/Time2Retire/front/src/pages/chart/chart.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle color="primary">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Chart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style = "display: block">\n  <canvas class = "chart" baseChart width="400" height="400"\n  [datasets]="barChartData"\n  [labels]="barChartLabels"\n  [options]="barChartOptions"\n  [legend]="barChartLegend"\n  [chartType]="barChartType"\n  (chartHover)="chartHovered($event)"\n  (chartClick)="chartClicked($event)">\n</canvas>\n</div>\n<input [(ngModel)]="x"><button (click)="randomize()">+</button>\n</ion-content>\n'/*ion-inline-end:"/Users/waynelester/Dropbox/Coding/Time2Retire/front/src/pages/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ })

});
//# sourceMappingURL=15.js.map