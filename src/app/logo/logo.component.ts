import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {AuthorizationService} from '../services/authorization.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AuthInfo} from '../store/app.model';
import * as AppActions from '../store/app.actions';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  isAuthenticated: boolean;
  username: string;
 // user: User;
  courseName: string = '';
  private querySubscription: Subscription;

  authInfo: Observable<{authInfo: AuthInfo}>;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute, private store: Store<AppState>) {


    /*
    private store: Store<AppState>) {

    this.authInfo = this.store.select('auth');
     */

    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        console.log('queryParam[\'name\'] = ' + queryParam['name']);
        if (typeof queryParam['name'] === 'undefined') {
          this.courseName = '';
        } else {
          this.courseName = '-->' + queryParam['name'];
        }
      }
    );
  }

  ngOnInit() {
    /*const authInfo = new AuthInfo('', false);

    this.store.dispatch(new AppActions.Login(authInfo));*/

    console.log('logo run');

    this.authInfo = this.store.select('auth');


    /*this.authorizationService.newUser.subscribe(
       (user) => {
         this.username = 'Dear ' + user.name.first + ' ' + user.name.last;
         this.isAuthenticated = user.isAuthenticated;
         this.user = user;
      },
       (err) => {
        console.log('Error: ' + err);
      },
       () => {
        console.log('Completed');
      });*/
  }

  logout() {
   // this.user.isAuthenticated = false;
    console.log('logout');

    const authInfo = new AuthInfo('', false);

    this.store.dispatch(new AppActions.Login(authInfo));

    //this.authorizationService.newUser.next(this.user);

    this.router.navigate(['/']);
    // this.authorizationService.newUser.next(this.user);
  }

}
