import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';
import {Subscription} from 'rxjs/Subscription';
import {CourseService} from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;
  isAddPage: boolean;
  subscription: Subscription;

  constructor(private authorizationService: AuthorizationService, private courseService: CourseService) {}

  ngOnInit() {
    this.isAddPage = false;

    this.subscription = this.authorizationService.getMessage().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });

    this.courseService.isAddPage.subscribe(isAddPage => {
      this.isAddPage = isAddPage;
    });

  }
}
