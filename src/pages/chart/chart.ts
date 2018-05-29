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

<<<<<<< HEAD
  dateOfBirth: string;
  breakEvenYear: number;
  amtInvested: number;
  avgIncome: number;
  fullRetAge: number;
  retYear: number = 2050;
  croakYear: number = 2080;
  retRange: number = this.croakYear - this.retYear;
  benefitObject: any;
  monthlyBen: number;
  totalBen: number;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _api: Api,
            ) {}
  
  public barChartOptions:any = {
=======
  x: number = 0;
  data1: number = 3300 + this.x;
  data2: any = 2055;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    Chart.pluginService.register(ChartLabels);
  }

  public barChartOptions: any = {
>>>>>>> feature-profile
    plugins: {
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        font: {
          weight: 'bold',
          size: 25,
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
<<<<<<< HEAD
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
            max: 1000000,
            min: 50000,
            stepSize: 50000
          },
          gridLines: {
            display: false
          }
        }]
=======
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
>>>>>>> feature-profile
    }
  };

  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
<<<<<<< HEAD
  public chartHovered(e:any):void {
    console.log(e);
  }

  public barChartData:any[] = [
    {data: [this.monthlyBen], label: 'Monthly Benefit Amt.', yAxisID:'A'},
    {data: [this.totalBen], label: 'Total Benefit', yAxisID: 'B'}
  ];

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
=======

  public chartHovered(e: any): void {
    console.log(e);
  }

  // public increment(){
  //   this.x += 50
  //   this.barChartData[0].data[0]
  //   console.log(this.barChartData[0].data[0])
  // }

  public barChartData: any[] = [
    { data: [this.data1], label: 'Monthly Benefit Amt.' },
    { data: [this.data2], label: 'Break-Even Year' }
  ];

  public randomize(): void {
    this.x += 50;
    let _barChartData: Array<any> = new Array(this.barChartData.length);
    for (let i = 0; i < this.barChartData.length; i++) {
      _barChartData[i] = { data: new Array(this.barChartData[i].data.length), label: this.barChartData[i].label };
      for (let j = 0; j < this.barChartData[0].data.length; j++) {
        _barChartData[i].data[j] = this.x;
      }
    }
    this.barChartData = _barChartData;
>>>>>>> feature-profile
  }

  ionViewDidLoad() {
    this._api.getRetire('1954', '1400', 'true')
    .subscribe(data => {
      this.benefitObject = data;
      console.log(data[63].monthlyBen)
      this.setChartData(data[63].monthlyBen)
    })
    Chart.pluginService.register(ChartLabels);
  }

}
