import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../action/auth.actions';
import { catchError,  map, of, switchMap, tap, timer,  } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { doc, setDoc , Firestore} from '@angular/fire/firestore';
import { WatchlistActions } from '../action/watchlist.actions';



@Injectable()
export class AuthEffects {
  private firestore: Firestore = inject(Firestore)

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signUpUser),
    switchMap(action => 
      this.databaseService.signUpUser(action.user.username, action.user.email, action.user.password).pipe(
        map(userCredential => {
          const user = userCredential.user;
        
          setDoc(doc(this.firestore, 'Users', user.uid), {
              name: action.user.username,
              email: action.user.email,
              photoURL: null
          })
          return  AuthActions.signUpSuccess({ user: userCredential})
        }),
        catchError(error => of(AuthActions.signUpFail({errorMessage: error.code})))
      )
    )
  ))

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logInUser),
      switchMap(action =>
        this.databaseService.loginUser(action.email, action.password).pipe(
          map(userCredential => AuthActions.logInSuccess({ user: userCredential })),
          tap(userCredential => localStorage.setItem('user', JSON.stringify(userCredential.user))),
          catchError(error => of(AuthActions.logInFail({errorMessage: error.code}))),
        )
      )
    )
  })

  logout$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.logOutUser),
      tap(() => localStorage.setItem('user', null)),
    ),
    {dispatch: false}
  )
  constructor(private actions$: Actions, private databaseService: DatabaseService) {}
}
