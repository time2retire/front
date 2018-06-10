import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  myForm: FormGroup;
  signupAttempt: boolean = false;

  newUser: any = {
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController,
              public _user: User,
              public toastCtrl: ToastController,
              public fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ])],
      confirmEmail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['']
    })
  }

  newSignup() {
    return this._user.signupCustom(this.newUser)
      .subscribe((newUser: any) => {
        console.log(newUser, 'Signup Successful');
        this._user.user = newUser;
        sessionStorage.setItem('token', newUser.token)
        sessionStorage.setItem('userId', newUser.userId)
        this._user.user = this.newUser;
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
  submit(){
    this.signupAttempt = true;
    console.log(this.myForm.controls.firstName.valid)
    if(!this.myForm.valid){
      console.log("Unsuccessful Registration")
    } else {
      let toast = this.toastCtrl.create({
        message: 'Registration Successful!',
        duration: 2000,
        position: 'top'
      });
      toast.present()
    }
  }

}
