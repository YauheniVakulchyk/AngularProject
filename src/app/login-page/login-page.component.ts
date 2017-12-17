import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

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
    this.authorizationService.login(this.username, this.password);
  }

  ngOnInit() {
  }

}
