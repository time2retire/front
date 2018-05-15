import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChartPage } from './new-chart';

@NgModule({
  declarations: [
    NewChartPage,
  ],
  imports: [
    IonicPageModule.forChild(NewChartPage),
  ],
})
export class NewChartPageModule {}
