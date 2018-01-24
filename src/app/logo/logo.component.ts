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

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit() {
    this.authorizationService.newUser.subscribe(
       (user) => {
         this.username = user.name;
         this.isAuthenticated = user.isAuthenticated;
      },
       (err) => {
        console.log('Error: ' + err);
      },
       () => {
        console.log('Completed');
      });
  }

  logout() {
    const user: User = {
      name: null,
      password: null,
      isAuthenticated: false
    }
    this.authorizationService.newUser.next(user);
  }


}
