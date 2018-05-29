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
  slider: any = {lower: 62, upper: 85};
  monthlyBenefit: number;
  totalBenefit: number;
  
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
      console.log(data)
      this.benefitObject = data;
      this.monthlyBenefit = data[63].monthlyBen
      this.totalBenefit = this.monthlyBenefit * 12 * this.retRange;
      this.barChartData = [
        {data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID:'A'},
        {data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B'}
      ];
    })
    Chart.pluginService.register(ChartLabels);
  }

}
