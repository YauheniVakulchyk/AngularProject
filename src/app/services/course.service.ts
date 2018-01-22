import {CourseComponent} from '../courses-page/course/course.component';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CourseService {

  private courses: any[] = [
    { id: 1, date: new Date(2018, 11, 25), title: 'Angular course', duration: 150, description: 'This is a very interesting course.', hasStar: true },
    { id: 2, date: new Date(2018, 11, 18), title: 'Java course', duration: 60, description: 'This is a very interesting course.', hasStar: false},
    { id: 3, date: new Date(2017, 11, 10), title: 'Machine Learning course', duration: 40, description: 'This is a very interesting course.', hasStar: true}
  ];

  public isUpdated = new Subject<boolean>();

  idOfNewCourse: number;
  public searchText = new Subject<string>();

  editCourseItem: number;
  public isAddPage = new Subject<boolean>();

  constructor() {
    this.idOfNewCourse =  this.courses.length + 1;
  }

  getList(): CourseComponent[] {
    return this.courses;
  }

  getCourse(id: number): CourseComponent {
    return this.courses.find(function (obj) { return obj.id === id; });
  }

  addCourse(newTitle: string, newDuration: number, newDescription: string, newHasStar: boolean) {

    this.idOfNewCourse++;
    this.isUpdated.next(true);
  }

  editCourse(newTitle: string, newDuration: number, newDescription: string, newHasStar: boolean, idOfCourse?: number) {
    if(idOfCourse!=null){
      const course = this.getCourse(idOfCourse);
      this.courses = this.courses.filter(e => e !== course);
      this.courses.push({id: idOfCourse, date: new Date(), title: newTitle, duration: newDuration, description: newDescription, hasStar: newHasStar});
    } else{
      this.courses.push({id: this.idOfNewCourse, date: new Date(), title: newTitle, duration: newDuration, description: newDescription, hasStar: newHasStar });
      this.idOfNewCourse++;
    }


    this.isUpdated.next(true);
  }

  deleteCourse(id: number) {
    const course = this.getCourse(id);
    this.courses = this.courses.filter(e => e !== course);
    this.isUpdated.next(true);
  }

  setSearchTest(searchText: string) {
    this.searchText.next(searchText);
  }

  /*setEditCourseItem(idOfCourse: number) {
    this.editCourseItem.next(idOfCourse);
  }*/

  setIsAddPage(isAddPage: boolean, idOfCourse?: number) {
    if(idOfCourse != null){
      this.editCourseItem = idOfCourse;
    }
    this.isAddPage.next(isAddPage);
  }

  closeWindow() {
    this.isUpdated.next(true);
  }

  /*sortListOfCourses() {
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
  }*/
}
