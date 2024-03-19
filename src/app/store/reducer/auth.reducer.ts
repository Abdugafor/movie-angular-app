import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../action/auth.actions';
import { IUser } from 'src/app/models/interfaces/auth.interface';
import { User, UserCredential } from '@angular/fire/auth';

export const authFeatureKey = 'auth';

export interface State {
  user: UserCredential
  SignUpErrorMessage: string
  LogInErrorMessage: string
}

export const initialState: State = {
  user: null,
  SignUpErrorMessage: null,
  LogInErrorMessage: null
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.logInSuccess, AuthActions.getUserFromLocalstorage, (state, action) => {
    return {
      ...state,
      user: action.user
    }
  }),
  on(AuthActions.signUpFail, (state, action) => {
    return {
      ...state, 
      SignUpErrorMessage: action.errorMessage
    }
  }),
  on(AuthActions.logInFail, (state, action) => {
    return {
      ...state, 
      LogInErrorMessage: action.errorMessage
    }
  }),
  on(AuthActions.logOutUser, state => {
    return {
      ...state,
      user: null
    }
  }),
);

