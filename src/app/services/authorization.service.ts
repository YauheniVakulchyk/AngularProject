// import {CourseComponent} from '../courses-page/course/course.component';
import {EventEmitter, Injectable} from '@angular/core';
// import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {HttpClient, HttpParams} from '@angular/common/http';
// import {RequestMethod, RequestOptions, Response} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthorizationService {

  newUser = new ReplaySubject<User>();
  user: User;

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:4001/users';
    this.user = null;

    this.newUser.subscribe(
      (user) => {
        this.user = user;
      },
      (err) => {
        console.log('Error: ' + err);
      },
      () => {
        console.log('Completed');
      });
  }

  getData(login: string, password: string): Observable<User[]> {

   /* const headers = new HttpHeaders();
    headers.append('Content-Type','application/text');*/

    const params = new HttpParams()
      .set('login', login)
      .set('password', password);

     return this.http.get<User[]>(this.baseUrl, { params: params });
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  public isAuthenticated(): boolean {
    if ( this.user != null && this.user.isAuthenticated != null) {
      return this.user.isAuthenticated;
    }
    return false;
  }

}
