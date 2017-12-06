import {Component, OnInit} from '@angular/core';
import {CourseComponent} from './course/course.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  coursesList: any[];

  constructor() {
    this.coursesList = [];
  }

  submitOnDelete(event: number) {
    console.log(event);
  }

  ngOnInit() {
    this.coursesList.push({id: 1, creationDate: new Date(2017, 2, 17), title: 'Angular course', duration: 50, description: 'This is a very interesting course.'});
    this.coursesList.push({id: 2, creationDate: new Date(2015, 11, 18), title: 'Java course', duration: 60, description: 'This is a very interesting course.'});
    this.coursesList.push({id: 3, creationDate: new Date(2016, 4, 21), title: 'Machine Learning course', duration: 40, description: 'This is a very interesting course.'});
  }

}
