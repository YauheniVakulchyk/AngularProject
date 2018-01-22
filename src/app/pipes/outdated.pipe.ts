import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outdated',
  pure: false
})
export class OutdatedPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    console.log('Outdated pipe');

    const twoWeekAgoDate = new Date();
    twoWeekAgoDate.setDate(twoWeekAgoDate.getDate() - 14);
    const twoWeekAgoDateTime = twoWeekAgoDate.getTime();

    return courses.filter( course => {
      if(course.date.getTime() > twoWeekAgoDateTime){
        return course;
      }
    });
  }
}
