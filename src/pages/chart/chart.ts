import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js'
import * as ChartLabels from 'chartjs-plugin-datalabels';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  inputForm;
  haveData: Boolean = false;
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
    public formBuilder: FormBuilder,
    public _api: Api,
  ){
    this.inputForm = formBuilder.group({
      dateOfBirth: [''],
      amountPaid: [''],
      avgIncome: [''],
      // lengthOfRetirement: ['']
    })
  }
  
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

  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

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

  sendChartData() {
    let dob = Number(this.inputForm.value.dateOfBirth.substr(0,4))
    let income = this.inputForm.value.avgIncome
    this.croakYear = dob + 85;
    this._api.getRetire(dob, income, 'true')
    .subscribe(data => {
      let high = 0;
      let highYear;
      this.benefitObject = data;
      Object.keys(data).forEach(year => {
        this.retYear = dob + Number(year);
        if ((data[year].monthlyBen * 12)  * this.retRange > high) {
          high = (data[year].monthlyBen * 12)  * this.retRange;
          highYear = year
        }
      })
      this.monthlyBenefit = this.benefitObject[highYear].monthlyBen;
      console.log(this.monthlyBenefit)
      this.totalBenefit = high;
      this.barChartData = [
        {data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID:'A'},
        {data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B'}
      ];
      this.slider.lower = highYear
      this.haveData = true
    })
  }

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
    this.totalBenefit = (this.monthlyBenefit * 12) * this.retRange;
    this.barChartData = [
      {data: [this.monthlyBenefit], label: 'Monthly Benefit Amt.', yAxisID:'A'},
      {data: [this.totalBenefit], label: 'Total Benefit', yAxisID: 'B'}
    ];
  }
  
  ionViewDidLoad() {
    this._api.getRetire('1954', '1400', 'true')
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
