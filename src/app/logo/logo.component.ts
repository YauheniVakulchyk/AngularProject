import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {AuthorizationService} from '../services/authorization.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  isAuthenticated: boolean;
  username: string;
  user: User;
  courseName: string = '';
  private querySubscription: Subscription;

  constructor(private authorizationService: AuthorizationService, private courseService: CourseService, private router: Router, private route: ActivatedRoute) {

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
    this.authorizationService.newUser.subscribe(
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
      });
  }

  logout() {
    this.user.isAuthenticated = false;
    console.log('logout');
    this.authorizationService.newUser.next(this.user);
    this.router.navigate(['/']);
    // this.authorizationService.newUser.next(this.user);
  }

}
