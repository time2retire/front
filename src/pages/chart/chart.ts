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
  monthlyBen: number = 1870;
  totalBen: number = this.monthlyBen * 12 * this.retRange;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _api: Api,
            ) {}
  
  public barChartOptions:any = {
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
  }

  ionViewDidLoad() {
    this._api.getRetire()
    .subscribe(data => {
      this.benefitObject = data;
      console.log('i ran')
      this.setChartData(data[63].monthlyBen)
    })
    Chart.pluginService.register(ChartLabels);
  }

}
