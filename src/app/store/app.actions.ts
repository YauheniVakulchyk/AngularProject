import { Action } from '@ngrx/store';
import {AuthInfo} from './app.model';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: AuthInfo) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload: AuthInfo) {}
}

export type AuthActions = Login | Logout;
