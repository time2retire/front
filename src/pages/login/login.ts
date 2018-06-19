import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userLogin: any = {
    email: '',
    password: ''
  }
  returningUser: any;
  invalidCredentials: boolean = false;
  otherError: boolean = false;

  constructor(public navCtrl: NavController,
    public _user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

  //   this.translateService.get('LOGIN_ERROR').subscribe((value) => {
  //     this.loginErrorString = value;
  //   })
  }

  loginUser() {
    //create newUser from input data (for clean data)
    this.returningUser = {
      email: this.userLogin.email.toLowerCase(),
      password: this.userLogin.password
    }
    return this._user.loginCustom(this.returningUser).subscribe(
      (userLog: any) => {
        this._user.user = userLog.user
        this._user.userBirthday = userLog.user.birthday
        console.log(userLog.user)
        sessionStorage.setItem('token', userLog.token)
        sessionStorage.setItem('userId', userLog.userId)

        this.navCtrl.setRoot(MainPage);
      }, (err) => {
        console.log(err, "error");
        let badCreds = err.error.error.statusCode === (400 || 401);
        if (badCreds){
          this.invalidCredentials = true;
        }
        else{
          this.otherError = true;
        }

        //reset input fields if bad login
          this.userLogin.email = '';
          this.userLogin.password = '';
      }
    )
  }

}
