import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../action/auth.actions';
import { catchError,  map, of, switchMap, tap,  } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';



@Injectable()
export class AuthEffects {
  // signUp$ = createEffect(() => this.actions$.pipe(
  //   ofType(AuthActions.signUpUser),
  //   switchMap(action => 
  //     this.databaseService.signUpUser(action.user.username, action.user.email, action.user.password).pipe(
  //       map
  //     )
  //   )
  // ))

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logInUser),
      switchMap(action =>
        this.databaseService.loginUser(action.email, action.password).pipe(
          map(userCredential => AuthActions.logInSuccess({ user: userCredential })),
          tap(() =>  window.location.reload()),
          catchError(error => of(AuthActions.logInFail())),
        )
      )
    )
  })

  constructor(private actions$: Actions, private databaseService: DatabaseService) {}
}
