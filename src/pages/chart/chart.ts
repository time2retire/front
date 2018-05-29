import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js'
import * as ChartLabels from 'chartjs-plugin-datalabels';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  dateOfBirth: string;
  breakEvenYear: number;
  amtInvested: number;
  avgIncome: number;
  fullRetAge: number;
  retYear: number = 2050;
  croakYear: number = 2080;
  retRange: number = this.croakYear - this.retYear;
  benefitObject: any;
<<<<<<< HEAD
  slider: any = {lower: 62, upper: 85};
  monthlyBenefit: number;
  totalBenefit: number;
=======
  monthlyBen: number = 1870;
  totalBen: number = this.monthlyBen * 12 * this.retRange;
>>>>>>> 802bb59ae7e3a58712f17d93d640eeccf82d9ea7
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public _api: Api,
  ){}
  
  public barChartOptions:any = {
    plugins: {
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        font: {
          weight: 'bold',
          size: 18,
        },
        formatter: function(value, context) {
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

  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  // events
  public chartClicked(e:any):void {
    console.log(e); 
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
  public barChartData:any[] = [
    {data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID:'A'},
    {data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B'}
  ];

<<<<<<< HEAD
  goSlider(){
    //fires with ionChange
    this.restrictValue();
    this.updateChart();
  }
  restrictValue () {
    /*restricts lower value from 
    going out of the bounds of
    the bebefitObject*/
    if (this.slider.lower >= 70) {
      this.slider.lower = 70;
    }
=======
  // public randomize():void {
  //   let _barChartData:Array<any> = new Array(this.barChartData.length);
  //   for (let i = 0; i < this.barChartData.length; i++) {
  //     _barChartData[i] = {data: new Array(this.barChartData[i].data.length), label: this.barChartData[i].label};
  //     for (let j = 0; j < this.barChartData[0].data.length; j++) {
  //       _barChartData[i].data[j]
  //     }
  //   }
  //   this.barChartData = _barChartData;
  // }

  setChartData(monthlyBen) {
    let totalBen = monthlyBen * 12 * this.retRange
    this.barChartData = [
      {data: [monthlyBen], label: 'Monthly Benefit Amt.', yAxisID:'A'},
      {data: [totalBen], label: 'Total Benefit', yAxisID: 'B'}
    ];
  }

  slideRetAge(event) {
    this.setChartData(this.benefitObject[event.value].monthlyBen);
>>>>>>> 802bb59ae7e3a58712f17d93d640eeccf82d9ea7
  }
  updateChart(){
    /*Updates Bar chart and card
    based on sliders upper and lower
    values*/
    console.log(this.slider)
    this.monthlyBenefit = this.benefitObject[this.slider.lower].monthlyBen;
    this.totalBenefit = this.monthlyBenefit * 12 * this.retRange;
    this.barChartData = [
      {data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID:'A'},
      {data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B'}
    ];
  }
  
  ionViewDidLoad() {
    //access retObject from back-end
    this._api.getRetire()
    .subscribe(data => {
<<<<<<< HEAD
      console.log(data)
      this.benefitObject = data;
      this.monthlyBenefit = data[63].monthlyBen
      this.totalBenefit = this.monthlyBenefit * 12 * this.retRange;
      this.barChartData = [
        {data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID:'A'},
        {data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B'}
      ];
=======
      this.benefitObject = data;
      console.log('i ran')
      this.setChartData(data[63].monthlyBen)
>>>>>>> 802bb59ae7e3a58712f17d93d640eeccf82d9ea7
    })
    Chart.pluginService.register(ChartLabels);
  }

}
