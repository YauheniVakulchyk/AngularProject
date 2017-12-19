import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  courseId: number;
  title: string;
  duration: number;
  description: string;
  hasStar: boolean;

  constructor(private courseService: CourseService) {

  }

  setValues(id: number) {
    this.courseId = id;
    const course = this.courseService.getCourse(id);
    console.log(course);
    this.title = course.title;
    this.duration = course.duration;
    this.description = course.description;
    this.hasStar = course.hasStar;
  }

  editCourse() {
    this.courseService.editCourse(this.courseId, this.title, this.duration, this.description, this.hasStar);
  }

  close() {
    this.courseService.closeWindow();
  }

  ngOnInit() {
  }

}
