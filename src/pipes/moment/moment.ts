import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
 //Accepts 3 arguments similar to date pipe it takes a date and a format(any moment format)
 //the 3rd argument is a boolean value for whether to timezone adjust


  transform(date, format:String, useUtc: Boolean) {
    let newMoment;
    if (useUtc) {
      newMoment = moment.utc(date)
    } else {
      newMoment = moment(date)
    }    
    return newMoment.format(format)
  }
}
