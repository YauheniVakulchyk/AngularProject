import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {CourseComponent} from '../courses-page/course/course.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  id: number;
  course: CourseComponent;

  myForm: FormGroup;

  constructor(private courseService: CourseService, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [ Validators.required, Validators.maxLength(500)]],
      duration: ['', [ Validators.required]],
      date: ['', [ Validators.required]],
      isTopRated: ['']
    });
  }

  addCourse() {
    if (this.id != null) {
      this.course.name = this.myForm.controls['name'].value;
      this.course.duration = this.myForm.controls['duration'].value;
      this.course.description = this.myForm.controls['description'].value;
      this.course.isTopRated = this.myForm.controls['isTopRated'].value;
      this.courseService.updateCourse(this.course).subscribe(() => {
        this.courseService.isAddPage.next(false);
      });
    } else {
      this.courseService.addCourse({
        name: this.myForm.controls['name'].value,
        id: null,
        duration: this.myForm.controls['duration'].value,
        description: this.myForm.controls['description'].value,
        date: new Date,
        isTopRated: this.myForm.controls['isTopRated'].value
      }).subscribe(() => {
        this.courseService.isAddPage.next(false);
      });
    }
  }

  cancel() {
    this.courseService.isAddPage.next(false);
  }

  ngOnInit() {
    this.id = this.courseService.idOfEditCourse;

    if (this.id != null) {
      this.courseService.getCourse(this.id).subscribe((course: CourseComponent) => {
       this.course = course;
       this.myForm.setValue({
         name: course.name,
         description: course.description,
         duration: 100,
         date: course.date,
         isTopRated: course.isTopRated
       });
      });
    }
  }
}
