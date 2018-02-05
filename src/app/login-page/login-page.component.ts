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
    this.authorizationService.getData(this.username, this.password).subscribe((users: User[]) => {
      if (users.length > 0) {
        users[0].isAuthenticated = true;
        this.authorizationService.newUser.next(users[0]);
      }
    });
  }

  ngOnInit() {
  }

}
