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
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { name: string, email: string, password: string } = {
  //   name: 'Test Human',
  //   email: 'test@example.com',
  //   password: 'test'
  // };

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

  // doSignup() {
  //   // Attempt to login in through our User service
  //   this.user.signup(this.account).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {

  //     this.navCtrl.push(MainPage);

  //     // Unable to sign up
  //     let toast = this.toastCtrl.create({
  //       message: this.signupErrorString,
  //       duration: 3000,
  //       position: 'top'
  //     });
  //     toast.present();
  //   });
  // }

  newSignup() {

    return this.user.signupCustom(this.newUser).subscribe(
      newUser => {
        console.log(newUser, 'Signup Successful');
        this.navCtrl.push(MainPage);
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
        this.newUser.userName = '';
        this.newUser.birthday = '';
        this.newUser.email = '';
        this.newUser.password = '';
      }
    )
  }
}
