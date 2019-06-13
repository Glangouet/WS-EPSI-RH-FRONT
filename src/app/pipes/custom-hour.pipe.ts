import { Pipe, PipeTransform } from '@angular/core';
import 'date_format';

@Pipe({name: 'customHour'})

export class CustomHourPipe implements PipeTransform {
  transform(timestamp: number): string {
    const h = new Date(timestamp).getHours();
    const m = new Date(timestamp).getMinutes();

    const h2 = ( h < 10 ) ? '0' + h : h;
    const m2 = ( m < 10 ) ? '0' + m : m;

    return h + ':' + m;
  }
}
