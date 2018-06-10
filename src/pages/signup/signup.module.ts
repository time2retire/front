import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    TranslateModule.forChild(),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule { }
