import {CourseComponent} from '../courses-page/course/course.component';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CourseService{

  private courses: any[] = [
    { id: 1, creationDate: new Date(2017, 2, 17), title: 'Angular course', duration: 50, description: 'This is a very interesting course.' },
    { id: 2, creationDate: new Date(2015, 11, 18), title: 'Java course', duration: 60, description: 'This is a very interesting course.'},
    { id: 3, creationDate: new Date(2016, 4, 21), title: 'Machine Learning course', duration: 40, description: 'This is a very interesting course.'}
  ];

  public isUpdated = new Subject<boolean>();

  idOfNewCourse: number;

  constructor(){
    this.sortListOfCourses();
    this.idOfNewCourse =  this.courses.length + 1;
  }

  getList(): CourseComponent[] {
    return this.courses;
  }

  getCourse(id: number): CourseComponent {
    return this.courses.find(function (obj) { return obj.id === id; });
  }

  addCourse(newTitle: string, newDuration: number, newDescription: string) {
    this.courses.push({id: this.idOfNewCourse, creationDate: new Date(), title: newTitle, duration: newDuration, description: newDescription});
    this.idOfNewCourse++;
    this.sortListOfCourses();
    this.isUpdated.next(true);
  }

  editCourse(idOfCourse: number, newTitle: string, newDuration: number, newDescription: string) {
    const course = this.getCourse(idOfCourse);
    this.courses = this.courses.filter(e => e !== course);
    this.courses.push({id: idOfCourse, creationDate: course.creationDate, title: newTitle, duration: newDuration, description: newDescription});
    this.sortListOfCourses();
    this.isUpdated.next(true);
  }

  deleteCourse(id: number) {
    const course = this.getCourse(id);
    this.courses = this.courses.filter(e => e !== course);
    this.sortListOfCourses();
    this.isUpdated.next(true);
  }

  closeWindow() {
    this.isUpdated.next(true);
  }

  sortListOfCourses() {
    this.courses.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    console.log(this.courses);
  }
}
