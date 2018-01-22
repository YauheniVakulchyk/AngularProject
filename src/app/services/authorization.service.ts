import {CourseComponent} from '../courses-page/course/course.component';
import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {

  newUser: User;
  isAuthenticated: boolean;

  private subject = new Subject<boolean>();

  sendMessage(message: boolean) {
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<boolean> {
    return this.subject.asObservable();
  }

  constructor() {
    this.isAuthenticated = false;
  }

  buildUser(userName: string, userPassword: string): User {

    return { name: userName, password: userPassword };
  }

  login(userName: string, userPassword: string) {
    this.newUser = this.buildUser(userName, userPassword);
    console.log(this.newUser.name);
    console.log(this.newUser.password);
    this.isAuthenticated = true;
    this.sendMessage(this.isAuthenticated);
  }

  logout() {
    this.newUser = null;
    this.isAuthenticated = false;
    this.clearMessage();
  }

  getUserInfo(): User {
    return this.newUser;
  }
}
