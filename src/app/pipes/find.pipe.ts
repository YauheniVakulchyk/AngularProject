import { Pipe, PipeTransform } from '@angular/core';
import {CourseComponent} from '../courses-page/course/course.component';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(courses: CourseComponent[], searchText: string): CourseComponent[] {
    console.log('find pipe');
    if (!courses) { return []; }
    if (!searchText) { return courses; }
    searchText = searchText.toLowerCase();
    return courses.filter( course => {
      return course.name.toLowerCase().includes(searchText);
    });
  }
}
