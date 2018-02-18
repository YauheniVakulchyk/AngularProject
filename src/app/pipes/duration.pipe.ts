import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): any {
    console.log('duration = ' + duration);
    if (duration <= 0) {
      return '0 min.';
    }
    if (duration === 60) {
      return '1 h.';
    }
    if (duration < 60) {
      return duration + ' min.';
    } else {
      const hours = (duration - duration % 60) / 60;
      const mins = duration - hours * 60;
      return hours + ' h.' + mins + ' min.';
    }
  }
}
