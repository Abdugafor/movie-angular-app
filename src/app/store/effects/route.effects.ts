import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../action/auth.actions';
import { tap } from 'rxjs';



@Injectable()
export class RouteEffects {
  navigateHome$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logInSuccess, AuthActions.signUpSuccess),
    tap(() => this.router.navigate(['/'])),
    tap(() => {setTimeout(() => {
      window.location.reload()  
    }, 500);} )
  ),
  {dispatch: false}
  )

  constructor(private actions$: Actions, private router: Router) {}
}
