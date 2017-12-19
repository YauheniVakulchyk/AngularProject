import {Component, OnInit} from '@angular/core';
import {CourseComponent} from './course/course.component';
import {CourseService} from '../services/course.service';
import {ModalService} from '../services/modal.service';
import {FindPipe} from '../pipes/find.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  courses: CourseComponent[];
  isListEmpty: boolean = false;
  searchText: string;

  constructor(private courseService: CourseService, private modalService: ModalService, private findPipe: FindPipe) {
  }

  ngOnInit() {
    console.log('CoursesPageComponent init');
    this.courses = this.courseService.getList();
    this.courseService.isUpdated.subscribe((data) => {
      this.modalService.close();
      this.courses = this.courseService.getList();
      this.checkList(this.courses);
    });

    this.courseService.searchText.subscribe((data) => {
      this.courses = this.courseService.getList();
      this.courses = this.findPipe.transform(this.courses, data);
      this.checkList(this.courses);
    });
  }

  checkList(courses: CourseComponent[]) {
    if (courses.length === 0) {
      this.isListEmpty = true;
    } else {
      this.isListEmpty = false;
    }
  }
}
