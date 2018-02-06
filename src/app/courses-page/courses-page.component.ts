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

  constructor(private courseService: CourseService, private modalService: ModalService, private findPipe: FindPipe) {
  }

  ngOnInit() {
    console.log('CoursesPageComponent init');
   // this.courses = this.courseService.getList();

    this.courseService.getList().subscribe((courses: CourseComponent[]) => {
      this.courses = courses;
      console.log(courses);
    });

    this.courseService.coursesData.subscribe(data => {
      this.courseService.getList().subscribe((courses: CourseComponent[]) => {
        this.courses = courses;
        this.checkList(this.courses);
      });
    });

    /*this.courseService.searchText.subscribe((searchText) => {
      this.courses = this.courseService.getList();
      this.courses = this.findPipe.transform(this.courses, searchText);
      this.checkList(this.courses);
    });*/
  }

  checkList(courses: CourseComponent[]) {
    if (courses.length === 0) {
      this.isListEmpty = true;
    } else {
      this.isListEmpty = false;
    }
  }
}
