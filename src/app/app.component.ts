import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';
import 'rxjs/add/operator/map';
import {CourseService} from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;
  isAddPage: boolean;

  constructor(private authorizationService: AuthorizationService, private courseService: CourseService) {}

  ngOnInit() {
    this.isAddPage = false;

    this.authorizationService.newUser.map(user => this.changeUser(user)).subscribe(
      (user) => {
        this.isAuthenticated = user.isAuthenticated;
      },
      (err) => {
        console.log('Error: ' + err);
      },
       () => {
        console.log('Completed');
      });

    this.courseService.isAddPage.subscribe(isAddPage => {
      this.isAddPage = isAddPage;
    });

  }

  changeUser(user: User): User{
    user.name = 'Dear ' + user.name;
    return user;
  }
}
