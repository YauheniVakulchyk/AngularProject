import {Component, OnInit} from '@angular/core';
import {CourseComponent} from './course/course.component';
import {CourseService} from '../services/course.service';
import {ModalService} from '../services/modal.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  courses: CourseComponent[];

  course: CourseComponent;

  constructor(private courseService: CourseService, private modalService: ModalService) {}

  ngOnInit() {
    console.log('CoursesPageComponent init');
    this.courses = this.courseService.getList();
    this.courseService.isUpdated.subscribe((data) => {
      this.modalService.close();
      this.courses = this.courseService.getList();
    });
  }
}
