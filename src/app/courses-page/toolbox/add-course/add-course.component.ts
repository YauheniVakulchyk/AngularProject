import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  title: string;
  duration: number;
  description: string;

  constructor(private courseService: CourseService) {}

  addCourse() {
    this.courseService.addCourse(this.title, this.duration, this.description);
  }

  close() {
    this.courseService.closeWindow();
  }

  ngOnInit() {
  }

}
