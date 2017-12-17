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
  subscription: Subscription;
  username: string;

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit() {
    this.subscription = this.authorizationService.getMessage().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (this.isAuthenticated === true) {
        this.username = this.authorizationService.getUserInfo().name;
      }
    });
  }

  logout() {
    this.authorizationService.logout();
  }


}
