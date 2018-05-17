import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartPage } from './chart';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    ChartPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartPage),
    ChartsModule
  ],
})
export class ChartPageModule {}
