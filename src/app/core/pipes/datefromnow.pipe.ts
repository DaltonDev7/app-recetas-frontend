import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'datefromnow'
})
export class DateFromNowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {


    return moment(value).startOf('day').fromNow();;
  }

}
