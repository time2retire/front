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
    public _user: User) {

  }

  alert(question: any) {
    let alertConfig = {
      amountPaid: {
        title: 'Amount paid to Social Security',
        subTitle: `The total amount you have paid in Social Security Taxes.  This number is available on your social security report, 
      or you can estimate for yourself.
      For more information visit:`,
        buttons: ['Dismiss']
      },
      avgIncome: {
        title: 'Income consered by the Social Security Administration',
        subTitle: `The Social Security Administration uses an average of your 35 highest earning years, adjusted for inflation, to calculate
      your benefit.
      For more information visit:`,
        buttons: ['Dismiss']
      },

      // lengthOfRetirement : {
      //   title: 'How long do you expect to receive benefits?',
      //   subTitle: `The average social security recipient recieves benfits for 20 years.  There are a number of factors to consider.  Please visit
      //   ... for addtional information.`,
      //   buttons: ['Dismiss']
      // }
    }

    let alert = this.alertCtrl.create(alertConfig[question]);
    console.log(alertConfig[question])
    alert.present();
  }

  submit() {
    this.submitForm.emit()
  }
}
