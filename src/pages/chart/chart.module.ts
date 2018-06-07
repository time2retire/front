import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartPage } from './chart';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { InputFormComponent } from '../../components/input-form/input-form';

@NgModule({
  declarations: [
    ChartPage,
    InputFormComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChartPage),
    ChartsModule,
  ],
})
export class ChartPageModule {}
