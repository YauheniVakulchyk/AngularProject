import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {AuthorizationService} from '../services/authorization.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  isAuthenticated: boolean;
  username: string;
  user: User;

  constructor(private authorizationService: AuthorizationService) {}

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
    this.authorizationService.newUser.next(this.user);
  }

}
