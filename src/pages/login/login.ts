import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  //form and generted user
  myForm: FormGroup;
  returningUser: any;

  //Error Handling
  invalidCredentials: boolean = false;
  otherError: boolean = false;

  //showPassword properties
  isPassword: string = 'password';
  isActive: string = 'eye-off';
 

  constructor(public navCtrl: NavController,
              public _user: User,
              public toastCtrl: ToastController,
              public menuCtrl: MenuController,
              public fb:FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginUser() {
    //create newUser from input data (for clean data)
    console.log(this.myForm)
    this.returningUser = {
      email: this.myForm.controls.email.value.toLowerCase(),
      password: this.myForm.controls.password.value
    }
    return this._user.loginCustom(this.returningUser).subscribe(
      (userLog: any) => {
        this._user.user = userLog.user
        this._user.userBirthday = userLog.user.birthday
        console.log(userLog.user)
        sessionStorage.setItem('token', userLog.token)
        sessionStorage.setItem('userId', userLog.userId)

        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        this.navCtrl.setRoot(MainPage);
      }, (err) => {
        //Error Handling
        console.log(err, "error");
        let badCreds = err.status === 401;
        console.log("Are creds valid?",badCreds);
        if (badCreds){
          this.invalidCredentials = true;
        }
        else{
          this.otherError = true;
        }
        console.log("invalid creds?", this.invalidCredentials, "Some other Error?", this.otherError)
      }
    )
  }

  //showPassword methods
  showHide() {
    this.changeEyeIcon();
    this.changePasswordType();
  }
  //changes eye Icon "name" on click 
  changeEyeIcon(){
    this.isActive = 
      this.isActive === 'eye-off' ?
        "eye" : "eye-off" 
  }
  //changes password field "type" on click
  changePasswordType(){
    this.isPassword = 
      this.isPassword === 'password' ?
        "text" : "password"
  }

}
