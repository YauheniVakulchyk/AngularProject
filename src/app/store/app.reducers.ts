import { ActionReducerMap } from '@ngrx/store';
import { AuthActions, LOGIN, LOGOUT } from './app.actions';
import {AuthInfo} from './app.model';

export interface State {
  authInfo: AuthInfo;
}

const initialState: State = {
  authInfo: new AuthInfo( '', false)
  /*id: null,
  name: null,
  isAuth: false*/
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case LOGIN:
    case LOGOUT: {
      console.log('payload = ' + action.payload);
      return {
        ...state,
        authInfo: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export interface AppState {
  auth: State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};
