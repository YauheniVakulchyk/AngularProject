import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    console.log('Sorting pipe');

     courses.sort(function (a, b) {
        if (a.date.getTime() > b.date.getTime()) {
          return 1;
        }
        if (a.date.getTime() < b.date.getTime()) {
          return -1;
        }
        return 0;
      });
     return courses;
  }
}
