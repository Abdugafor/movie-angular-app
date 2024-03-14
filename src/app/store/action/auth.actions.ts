import { UserCredential } from '@angular/fire/auth';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from 'src/app/models/interfaces/auth.interface';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Sign up User': props<{user: IUser}>(),
    'Sign Up Fail': emptyProps(),
    'Sign Up Success': props<{user: IUser}>(),
    'Log in User': props<{email: string, password: string}>(),
    'Log in Fail': emptyProps(),
    'Log in Success': props<{user: UserCredential}>(),
    'Log out User': emptyProps()
  }
});
