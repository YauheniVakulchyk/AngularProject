import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';
// import {User} from '../classes/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authorizationService: AuthorizationService) {
  }

  login() {
    const user: User = {
      name: this.username,
      password: this.password,
      isAuthenticated: true
    }
    this.authorizationService.newUser.next(user);
  }

  ngOnInit() {
  }

}
