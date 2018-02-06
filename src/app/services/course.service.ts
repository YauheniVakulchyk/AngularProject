import {CourseComponent} from '../courses-page/course/course.component';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseService {

  private courses: any[] = [
   /* { id: 1, date: new Date(2018, 11, 25), name: 'Angular course', duration: 150, description: 'This is a very interesting course.', isTopRated: true },
    { id: 2, date: new Date(2018, 11, 18), name: 'Java course', duration: 60, description: 'This is a very interesting course.', isTopRated: false},
    { id: 3, date: new Date(2017, 11, 10), name: 'Machine Learning course', duration: 40, description: 'This is a very interesting course.', isTopRated: true}*/
  ];


  idOfNewCourse: number;
  public idOfEditCourse: number = null;
  public editCourseId = new Subject<number>();
  public searchText = new Subject<string>();
  public isAddPage = new Subject<boolean>();
  public coursesData = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.idOfNewCourse++;

    this.editCourseId.subscribe(id => this.idOfEditCourse = id);
  }

  getList(params?: HttpParams): Observable<CourseComponent[]> {
    return this.http.get<CourseComponent[]>('http://localhost:4002/courses', {params: params});
  }

  getCourse(id: number): Observable<CourseComponent> {
    return this.http.get<CourseComponent>('http://localhost:4002/courses/' + id);
  }

  /*editCourse(newName: string, newDuration: number, newDescription: string, newisTopRated: boolean, idOfCourse?: number) {
    if ( idOfCourse != null ) {
      const course = this.getCourse(idOfCourse);
      this.courses = this.courses.filter(e => e !== course);
      this.courses.push({id: idOfCourse, date: new Date(), name: newName, duration: newDuration, description: newDescription, isTopRated: newisTopRated});
    } else {
      this.courses.push({id: this.idOfNewCourse, date: new Date(), name: newName, duration: newDuration, description: newDescription, isTopRated: newisTopRated });
      this.idOfNewCourse++;
    }

    this.coursesData.next(true);
  }*/

  deleteCourse(id: number): Observable<Object> {
    /*const course = this.getCourse(id);
    this.courses = this.courses.filter(e => e !== course);*/

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authToken', '58ebfdf7f1f558c5c86e17f6');

    const params = new HttpParams().set('id', id.toString());

    return this.http.delete('http://localhost:4002/courses/' + id );

   /* this.getList().subscribe((courses: CourseComponent[]) => {
      this.courses = courses;
      this.coursesData.next(this.courses);
    });*/
  }

 /* deleteServiceWithId(url: string, key: string, val: string): Observable {
    return this.http
      .delete(url + '/?' + key + '=' + val)
      .map(this.extractData)

  }*/

}
