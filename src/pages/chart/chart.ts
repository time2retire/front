import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { Chart } from 'chart.js'
import * as ChartLabels from 'chartjs-plugin-datalabels';
import { Api } from '../../providers/api/api';
import { User } from '../../providers/user/user';

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
  monthlyBenefit: number;
  yearlyBenefit: number;
  totalBenefit: number;
  bestYear: number;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public _api: Api,
    public _user: User
  ) {
    this.inputForm = formBuilder.group({
      dateOfBirth: [''],
      amountPaid: [''],
      avgIncome: [''],
      // lengthOfRetirement: ['']
    })
  }

  public barChartOptions: any = {
    plugins: {
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        font: {
          weight: 'bold',
          size: 18,
        },
        formatter: function (value, context) {
          let currency = (value + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
          return "$" + currency + ".00";
        }
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      onClick: (e) => e.stopPropagation()
    },
    scales: {
      yAxes: [{
        id: 'A',
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
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks: {
          max: 800000,
          min: 100000,
          stepSize: 100000
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
    { data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID: 'A' },
    { data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B' }
  ];

  getBestYear(years) {
    let retLength, highYear
    let high = 0
    Object.keys(years).forEach(year => {
      retLength = this.slider.upper - parseInt(year);
      if ((years[year].monthlyBen * 12)  * retLength > high) {
        high = (years[year].monthlyBen * 12)  * retLength;
        highYear = parseInt(year)
      }
    })
    return highYear
  }

  sendChartData() {
    let dob = Number(this.inputForm.value.dateOfBirth.substr(0,4))
    let income = this.inputForm.value.avgIncome
    this.bucketYear = dob + 85;
    this._api.getRetire(dob, income, 'true')
    .subscribe(data => {
      this.benefitObject = data;
      this.bestYear = this.getBestYear(this.benefitObject)
      this.slider.lower = this.bestYear
      this.updateChart(this.bestYear);
      this.haveData = true
    })
  }

  goSlider() {
    //fires with ionChange
    this.restrictValue();
    this.bestYear = this.getBestYear(this.benefitObject)
    this.updateChart(this.slider.lower);
  }
  restrictValue () {
    /*restricts lower value from going out of the bounds of the bebefitObject*/
    if (this.slider.lower >= 70) {
      this.slider.lower = 70;
    }
  }
  updateChart(retAge){
    /*Updates Bar chart and card based on sliders upper and lower values*/
    this.monthlyBenefit = this.benefitObject[retAge].monthlyBen;
    this.yearlyBenefit = this.monthlyBenefit * 12;
    this.retRange = this.slider.upper - this.slider.lower;
    this.totalBenefit = this.yearlyBenefit * this.retRange;
    this.breakEvenYear = this.calcBreakEven(this.slider.lower, this.retRange, this.yearlyBenefit)
    this.barChartData = [
      { data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID: 'A' },
      { data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B' }
    ];
  }

  calcBreakEven(retYear, retRange, yearlyBenefit) :number {
    let amtInvested = this.inputForm.value.amountPaid;
    let breakEvenYear = 0;
    for (let i = 1; i <= retRange; i++){
      let yearCheck = yearlyBenefit * i;
      if(yearCheck >= amtInvested){
        breakEvenYear = i;
        break;
      }
    }
    if(breakEvenYear){
      return retYear + breakEvenYear;
    }
    
  }
  
  ionViewDidLoad() {
    Chart.pluginService.register(ChartLabels);
  }
}
