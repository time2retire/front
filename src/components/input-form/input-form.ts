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
        title: 'Amount paid to social security',
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
        title: 'The amount you are due from Social Security at your full retirement Age',
        subTitle: `If you are unsure and unable to estimate this figure it is available through the annual report provided by the social security
        Administration.  For more information about this statement, visit the Social Security Administration's website.  The current maximum is $2,788.`,
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
