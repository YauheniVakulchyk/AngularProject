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
  name: string;
  duration: number;
  description: string;
  isTopRated: boolean;

  constructor(private courseService: CourseService) {

  }

  setValues(id: number) {
    /*this.courseId = id;
    const course = this.courseService.getCourse(id);
    console.log(course);
    this.name = course.name;
    this.duration = course.duration;
    this.description = course.description;
    this.isTopRated = course.isTopRated;*/
  }

 /* editCourse() {
    this.courseService.editCourse(this.courseId, this.title, this.duration, this.description, this.hasStar);
  }*/

  close() {
    // this.courseService.closeWindow();
  }

  ngOnInit() {
  }

}
