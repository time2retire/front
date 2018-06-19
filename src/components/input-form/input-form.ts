import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { User } from '../../providers/user/user';

@Component({
  selector: 'input-form',
  templateUrl: 'input-form.html'
})
export class InputFormComponent {

  @Input() form;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  constructor(public alertCtrl: AlertController,
    public _user: User) {}

  alert(question: any) {
    let alertConfig = {
      amountPaid: {
        title: 'Amount paid to Social Security',
        subTitle: `The total amount you have paid in Social Security Taxes.  This number is available on your social security report, 
      or you can estimate for yourself.
      For more information visit the Social Security Administration's website`,
      buttons: [
        {
          text: 'Dismiss',
          role: 'Dismiss',
        },
        {
          text: 'More Info',
          handler: () => {
            window.open(`https://www.ssa.gov/myaccount/statement.html`, `_system`);
          }
        }
      ]
      },
      avgIncome: {
        title: 'Income consered by the Social Security Administration',
        subTitle: `Based on the annual report provided by social security.  What is the benefit amount you will recieve at full retirement age
      For more information visit the Social Security Administration's website.  The maximum amount for the year of 2018 is $2,788`,
        buttons: [
          {
            text: 'Dismiss',
            role: 'Dismiss',
          },
          {
            text: 'More Info',
            handler: () => {
              window.open(`https://www.ssa.gov/myaccount/statement.html`, `_system`);
            }
          }
        ]
      }
    }

    

    let alert = this.alertCtrl.create(alertConfig[question]);
    console.log(alertConfig[question])
    alert.present();
  }

  submit() {
    this.submitForm.emit()
  }
}
