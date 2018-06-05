import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  newUser: any = {
    firstName: '',
    lastName: '',
    userName: '',
    birthday: '',
    email: '',
    password: ''
  }

  signupAttempt: boolean = false;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  newSignup() {

    return this.user.signupCustom(this.newUser).subscribe(
      (newUser: any) => {
        console.log(newUser, 'Signup Successful');

        sessionStorage.setItem('token', newUser.token)
        sessionStorage.setItem('userId', newUser.userId)
        this.user.user = this.newUser;
        this.navCtrl.setRoot(MainPage);
      }, (err) => {

        this.signupAttempt = true;

        let toast = this.toastCtrl.create({
          message: 'Please fill out all details',
          duration: 2000,
          position: 'top'
        });
        toast.present()

        this.newUser.firstName = '';
        this.newUser.lastName = '';
        this.newUser.birthday = '';
        this.newUser.email = '';
        this.newUser.password = '';
      }
    )
  }
}
