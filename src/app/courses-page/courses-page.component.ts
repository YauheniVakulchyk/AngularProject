import {Component, OnInit} from '@angular/core';
import {CourseComponent} from './course/course.component';
import {CourseService} from '../services/course.service';
import {FindPipe} from '../pipes/find.pipe';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  courses: CourseComponent[];
  isListEmpty: boolean = false;

  currentPage: number;
  pageItems: number[];

  constructor(private courseService: CourseService, private findPipe: FindPipe) {
  }

  ngOnInit() {
    console.log('CoursesPageComponent init');
   // this.courses = this.courseService.getList();
    this.currentPage = 1;
    this.getList();

    this.courseService.coursesData.subscribe(data => {
      this.getList();
    });

    this.courseService.searchText.subscribe((searchText) => {
      console.log('SearchText subscribe = ' + searchText);
      this.getList(new HttpParams().set('name', searchText));
      // this.courses = this.findPipe.transform(this.courses, searchText);
      // this.checkList(this.courses);
    });
  }

  getList(params?: HttpParams) {
    this.courseService.getList(params).subscribe((courses: CourseComponent[]) => {
      // this.courses = courses;
      console.log(courses);
      this.setCourses((this.currentPage - 1) * 10, courses);
      this.checkList(this.courses);
      this.pageItems = this.range(1, Math.ceil(courses.length / 10) + 1 , 1);
    });
  }

  setCourses(startIndex: number, courses: CourseComponent[]) {
    this.courses = [];
    let to: number = startIndex + 10;

    if (courses.length < to) {
      to = courses.length;
    }
    for (let i = startIndex; i < to; i++) {
      this.courses.push(courses[i]);
    }
  }

  checkList(courses: CourseComponent[]) {
    if (courses.length === 0) {
      this.isListEmpty = true;
    } else {
      this.isListEmpty = false;
    }
  }

  range(start, edge, step): any[] {
    if (arguments.length === 1) {
      edge = start;
      start = 0;
    }


    edge = edge || 0;
    step = step || 1;

    let ret;
    for (ret = []; (edge - start) * step > 0; start += step) {
      ret.push(start);
    }
    return ret;
  }
}
