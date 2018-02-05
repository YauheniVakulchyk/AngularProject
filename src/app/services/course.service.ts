import {CourseComponent} from '../courses-page/course/course.component';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Http} from '@angular/http';

@Injectable()
export class CourseService {

  private courses: any[] = [
    { id: 1, date: new Date(2018, 11, 25), title: 'Angular course', duration: 150, description: 'This is a very interesting course.', hasStar: true },
    { id: 2, date: new Date(2018, 11, 18), title: 'Java course', duration: 60, description: 'This is a very interesting course.', hasStar: false},
    { id: 3, date: new Date(2017, 11, 10), title: 'Machine Learning course', duration: 40, description: 'This is a very interesting course.', hasStar: true}
  ];


  idOfNewCourse: number;
  public idOfEditCourse: number = null;
  public editCourseId = new Subject<number>();
  public searchText = new Subject<string>();
  public isAddPage = new Subject<boolean>();
  public coursesData = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.idOfNewCourse++;

    this.editCourseId.subscribe(id => this.idOfEditCourse = id);
  }

  getList(): CourseComponent[] {
    return this.courses;
  }

  getCourse(id: number): CourseComponent {
    return this.courses.find(function (obj) { return obj.id === id; });
  }

  editCourse(newTitle: string, newDuration: number, newDescription: string, newHasStar: boolean, idOfCourse?: number) {
    if ( idOfCourse != null ) {
      const course = this.getCourse(idOfCourse);
      this.courses = this.courses.filter(e => e !== course);
      this.courses.push({id: idOfCourse, date: new Date(), title: newTitle, duration: newDuration, description: newDescription, hasStar: newHasStar});
    } else {
      this.courses.push({id: this.idOfNewCourse, date: new Date(), title: newTitle, duration: newDuration, description: newDescription, hasStar: newHasStar });
      this.idOfNewCourse++;
    }

    this.coursesData.next(this.courses);
  }

  deleteCourse(id: string) {
    /*const course = this.getCourse(id);
    this.courses = this.courses.filter(e => e !== course);*/

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authToken', '58ebfdf7f1f558c5c86e17f6');

    const params = new HttpParams().set('id', id);

    this.http.delete('http://localhost:4001/users', { params: params, headers: headers });

    this.coursesData.next(this.courses);
  }
}
