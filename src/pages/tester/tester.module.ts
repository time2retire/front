import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesterPage } from './tester';

@NgModule({
  declarations: [
    TesterPage,
  ],
  imports: [
    IonicPageModule.forChild(TesterPage),
  ],
})
export class TesterPageModule {}
