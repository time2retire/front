import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Chart } from 'chart.js'
import * as ChartLabels from 'chartjs-plugin-datalabels';
import { Api } from '../../providers/api/api';
import { User } from '../../providers/user/user';
import { HttpClientModule } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  inputForm;
  haveData: Boolean = false;
  breakEvenYear: number;
  retYear: number;
  bucketYear: number;
  retRange: number;
  benefitObject: any;
  slider: any = { lower: 62, upper: 85 };
  is100: boolean;
  monthlyBenefit: number;
  yearlyBenefit: number;
  totalBenefit: number;
  bestYear: number;
  chartSave: any;
  chartData: any;
  sliderIncrementer: any = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public _api: Api,
    public _user: User,
    public _http: HttpClientModule,
    public toastCtrl: ToastController,
    public loader: LoadingController,
    public alertCtrl: AlertController,
    public navparam: NavParams,
  ) {
    this.inputForm = formBuilder.group({
      dateOfBirth: [this._user.userBirthday, Validators.required],
      amountPaid: ['', Validators.compose([Validators.min(1), Validators.required])],
      avgIncome: ['', Validators.compose([Validators.min(1), Validators.max(2788), Validators.required])]
    })
    if (this.navparam.get('data')) {
      let data = this.navparam.get('data');
      // this.chartData = data;
      this.monthlyBenefit = Number(data.monthlyBen);
      this.benefitObject = data.benefitObject
      this.bestYear = this.getBestYear(this.benefitObject)
      this.slider.lower = Number(data.retYear);
      this.slider.upper = Number(data.bucketYear);
      this.updateChart(data.retYear)
      this.haveData = true;
    }
  }

  public barChartOptions: any = {
    plugins: {
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        font: {
          weight: 'bold',
          size: 15,
        },
        formatter: function (value, context) {
          let currency = (value + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
          return "$" + currency;
        }
      }
    },
    tooltips: {enabled: false},
    hover: {mode: null},
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      onClick: (e) => e.stopPropagation(),
      fontSize: 12
    },
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        ticks: {
          max: 5000,
          min: 1000,
          stepSize: 1000,
          callback: function(value, index, values) {
            return '$' + value/1000 + "k";
          }
        },
        gridLines: {
          display: false
        }
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks: {
          max: 1200000,
          min: 0,
          stepSize: 200000,
          callback: function(value, index, values) {
            if (value >= 1000000){
              return '$' + value/1000000 + "M";
            }
            else{
              return '$' + value/1000 + "K";
            }
          }
        },
        gridLines: {
          display: false
        }
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  public barChartData: any[] = [
    { data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID: 'A'},
    { data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B'}
  ];

  getBestYear(years) {
    let retLength;
    let highYear = 0
    let high = 0
    Object.keys(years).forEach(year => {
      retLength = this.slider.upper - parseInt(year);
      if ((years[year].monthlyBen * 12) * retLength > high) {
        high = (years[year].monthlyBen * 12) * retLength;
        highYear = parseInt(year)
      }
    })
    return highYear
  }
  
  calcBreakEven(retYear, retRange, yearlyBenefit): number {
    let amtInvested = this.inputForm.value.amountPaid;
    let breakEvenYear = 0;
    for (let i = 1; i <= retRange; i++) {
      let yearCheck = yearlyBenefit * i;
      if (yearCheck >= amtInvested) {
        breakEvenYear = i;
        break;
      }
    }
    if (breakEvenYear) {
      return retYear + breakEvenYear;
    }
  }

  sendChartData() {
    if (this.inputForm.value.avgIncome > 2788) {
      this.inputForm.patchValue({avgIncome: 2788})
      let toast = this.toastCtrl.create({
        message: 'The maximum monthly benefit in 2018 is $2,788',
        duration: 3000,
        position: 'top'
      });
      toast.present()
      return
    }
    if (!this.inputForm.valid) {
      let toast = this.toastCtrl.create({
        message: 'Please complete the form',
        duration: 3000,
        position: 'top'
      });
      toast.present()
    } else {
    let loader = this.loader.create({
    })
    loader.present()

    let dob = this.inputForm.value.dateOfBirth;
    let income = this.inputForm.value.avgIncome
    this.bucketYear = dob + 85;
    this._api.getRetire(dob, income, 'true')
      .subscribe(data => {
        this.benefitObject = data;
        this.bestYear = this.getBestYear(this.benefitObject)
        this.slider.lower = this.bestYear
        this.updateChart(this.bestYear);
        this.haveData = true
        loader.dismiss()
      }, err => {
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Unable to complete calculations.  Please try again later',
          duration: 3000,
          position: 'top'
        })
        toast.present()
      })
    }
  }

  goSlider() {
    //fires with ionChange
    this.restrictValue();
    this.bestYear = this.getBestYear(this.benefitObject)
    this.updateChart(this.slider.lower);
  }
  restrictValue() {
    /*restricts lower value from going out of the bounds of the bebefitObject*/
    if (this.slider.lower > 70) {
      this.sliderIncrementer ++
      this.slider.lower = 70;
      console.log(this.sliderIncrementer)
      if (this.sliderIncrementer%10 === 0) {
        let toast = this.toastCtrl.create({
          message: 'The Social Security Administration requires you to start taking benefits at 70',
          duration: 3000,
          position: 'top'
        })
        toast.present();
      }
    }
  }

  updateChart(retAge) {
    /*Updates Bar chart and card based on sliders upper and lower values*/
    this.is100 = this.slider.upper === 100
    this.monthlyBenefit = this.benefitObject[retAge].monthlyBen;
    this.yearlyBenefit = this.monthlyBenefit * 12;
    this.retRange = this.slider.upper - this.slider.lower;
    this.totalBenefit = this.yearlyBenefit * this.retRange;
    this.breakEvenYear = this.calcBreakEven(this.slider.lower, this.retRange, this.yearlyBenefit)
    this.barChartData = [
      { data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID: 'A',
          },
      { data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B',
          colors: []}
    ];
  }
  public barChartColors: any[] = [
    {
      backgroundColor: 'rgb(180,214,199)',
      borderColor: 'rgb(180,214,199)'
    },
    {
      backgroundColor: 'rgb(180,206,255)',
      borderColor: 'rgb(180,206,255)'
    }
  ]

  saveChart() {
    this.chartSave = {
      monthlyBen: this.monthlyBenefit,
      retYear: this.slider.lower,
      bucketYear: this.slider.upper,
      totalBen: this.totalBenefit,
      benefitObject: this.benefitObject,
      timestamp: Date.now()
    }
    this._user.savedChart(this.chartSave).subscribe(
      (chartLog: any) => {
        if (!this._user.user.charts) {
          this._user.user.charts = []
        }
        let toast = this.toastCtrl.create({
          message: 'Chart Saved.',
          duration: 2000,
          position: 'top'
        });
        toast.present()
        this._user.user.charts.push(chartLog)
        // console.log(chartLog.user)
      }
    )
  }
  navProfile(){
    this.navCtrl.setRoot("ProfilePage")
  }

  showModal(side) {
    let title, msg;
    if (side === "left") {
      title = 'Best Age to Retire'
      msg = `We calculate ${this.bestYear} to be the best age for you to begin reciving benefits.  This is the age that will allow you to
      receive the most from Social Security throughout your retirement based on the life expectancy below.`
    } else {
      title = 'Age to Break Even'
      msg = `Based on retirement age listed below, you will earn back the income paid into Social Security by age ${this.breakEvenYear}`
    }
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [{
        text: 'Ok',
        role: 'cancel'
      }]
    })
    alert.present();
  }

  ionViewDidLoad() {
    console.log(this._user.user)
    Chart.pluginService.register(ChartLabels);
    
  }
}
