import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
// import {User} from '../classes/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // username: string;
  // password: string;

  myForm: FormGroup;

  constructor(private authorizationService: AuthorizationService, private formBuilder: FormBuilder, private router: Router) {

    this.myForm = formBuilder.group({

      'userName': ['', [Validators.required]],
      'password': ['', [ Validators.required]]
    });

  }

  login() {
    console.log('login-login');
    this.authorizationService.getData(this.myForm.controls['userName'].value, this.myForm.controls['password'].value).subscribe((users: User[]) => {
      if (users.length > 0) {
       /*
        this.authorizationService.newUser.next(users[0]);*/
        users[0].isAuthenticated = true;
        this.authorizationService.newUser.next(users[0]);
        this.router.navigate(['/courses']);
      }
    });
  }

  ngOnInit() {
  }

}
