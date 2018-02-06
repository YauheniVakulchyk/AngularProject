import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  id: number;
  name: string;
  duration: number;
  description: string;
  date: Date;
  isTopRated: boolean;

  user: User;

  constructor(private courseService: CourseService) {}

  addCourse() {
    //this.courseService.editCourse(this.name, this.duration, this.description, this.isTopRated, this.id);
    this.courseService.isAddPage.next(false);
  }

  cancel() {
    this.courseService.isAddPage.next(false);
  }

  ngOnInit() {
    this.id = this.courseService.idOfEditCourse;

    /*if (this.id != null) {
      console.log('editCourseItem2');
      const course = this.courseService.getCourse(this.id);
      console.log(course);
      this.name = course.name;
      this.duration = course.duration;
      this.description = course.description;
      this.isTopRated = course.isTopRated;
      this.date = course.date;
    } else {
      console.log('editCourseItem3');
      this.name = null;
      this.duration = 0;
      this.description = null;
      this.isTopRated = false;
      this.date = null;
    }*/
  }
}
