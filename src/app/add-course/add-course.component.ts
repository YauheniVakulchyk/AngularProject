import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  id: number;
  title: string;
  duration: number;
  description: string;
  date: Date;
  hasStar: boolean;

  user: User;

  constructor(private courseService: CourseService) {}

  addCourse() {
    this.courseService.editCourse(this.title, this.duration, this.description, this.hasStar, this.id);
    this.courseService.isAddPage.next(false);
  }

  cancel() {
    this.courseService.isAddPage.next(false);
  }

  ngOnInit() {
    this.id = this.courseService.idOfEditCourse;

    if (this.id != null) {
      console.log('editCourseItem2');
      const course = this.courseService.getCourse(this.id);
      console.log(course);
      this.title = course.title;
      this.duration = course.duration;
      this.description = course.description;
      this.hasStar = course.hasStar;
      this.date = course.date;
    } else {
      console.log('editCourseItem3');
      this.title = null;
      this.duration = 0;
      this.description = null;
      this.hasStar = false;
      this.date = null;
    }
  }
}
