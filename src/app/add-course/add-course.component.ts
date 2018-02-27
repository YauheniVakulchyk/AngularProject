import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {CourseComponent} from '../courses-page/course/course.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  id: number;
  course: CourseComponent;

  myForm: FormGroup;

  private routeSubscription: Subscription;

  constructor(private courseService: CourseService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {

    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.myForm = formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [ Validators.required, Validators.maxLength(500)]],
      duration: ['', [ Validators.required]],
      date: ['', [ Validators.required]],
      isTopRated: ['']
    });
  }

  addCourse() {

    this.courseService.updateCourse({
      name: this.myForm.controls['name'].value,
      id: this.id,
      duration: this.myForm.controls['duration'].value,
      description: this.myForm.controls['description'].value,
      date: new Date,
      isTopRated: this.myForm.controls['isTopRated'].value
    }).subscribe(() => {
      this.router.navigate(['/courses']);
    });

  }

  cancel() {
    this.router.navigate(['/courses']);
  }

  ngOnInit() {
    // this.id = this.courseService.idOfEditCourse;

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
