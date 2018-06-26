import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
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

  //Show/Hide Password properties
  isPassword: boolean = true;
  isActive: string = 'eye-off';
 

  constructor(public navCtrl: NavController,
              public _user: User,
              public toastCtrl: ToastController,
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

        this.createForm();
      }
    )
  }

  eyeButton(){
    console.log("before", this.isActive)
    this.isActive = 
      this.isActive === 'eye-off' ?
        "eye" : "eye-off" 
  }
  showHide() {
    console.log(this.myForm)
    this.isPassword = !(this.isPassword)
    this.eyeButton();
    console.log("after", this.isActive)
  }

}
