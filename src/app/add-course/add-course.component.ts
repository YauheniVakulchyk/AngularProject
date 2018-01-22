import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {ModalService} from '../services/modal.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  title: string;
  duration: number;
  description: string;
  date: Date;
  hasStar: boolean;

  constructor(private courseService: CourseService) {}

  addCourse() {
    this.courseService.editCourse(this.title, this.duration, this.description, this.hasStar, this.courseService.editCourseItem);
    this.courseService.setIsAddPage(false);
  }

  cancel() {
    this.courseService.setIsAddPage(false);
  }

  ngOnInit() {
    const course = this.courseService.getCourse(this.courseService.editCourseItem);
    console.log(course);
    this.title = course.title;
    this.duration = course.duration;
    this.description = course.description;
    this.hasStar = course.hasStar;
    console.log("Date = " + course.date);
    this.date = course.date;
  }
}
