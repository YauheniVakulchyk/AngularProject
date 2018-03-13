import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {State, Store} from '@ngrx/store';
import {AppState} from '../store/app.reducers';
import {Observable} from 'rxjs/Observable';
import {AuthInfo} from '../store/app.model';
import * as AppActions from '../store/app.actions';
// import {User} from '../classes/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // username: string;
  // password: string;

 // authInfo: Observable<{authInfo: AuthInfo}>;

  myForm: FormGroup;

  constructor(private authorizationService: AuthorizationService, private formBuilder: FormBuilder, private router: Router, private store: Store<AppState>) {

   // this.authInfo = this.store.select('auth');

    this.myForm = formBuilder.group({

      'userName': ['', [Validators.required]],
      'password': ['', [ Validators.required]]
    });

  }

  login() {
    console.log('login-login');
    this.authorizationService.getData(this.myForm.controls['userName'].value, this.myForm.controls['password'].value).subscribe((users: User[]) => {
      if (users.length > 0) {

        const authInfo = new AuthInfo(this.myForm.controls['userName'].value, true);
        console.log('authInfo = ' + authInfo);
        this.store.dispatch(new AppActions.Login(authInfo));

        users[0].isAuthenticated = true;
        this.authorizationService.newUser.next(users[0]);
        this.router.navigate(['/courses']);
      }
    });
  }

  ngOnInit() {
  }

}
