import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WatchlistActions } from '../action/watchlist.actions';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { selectLikedMovies } from '../selectors/watchlist.selectors';



@Injectable()
export class WatchlistEffects {

  writeData$ = createEffect(() => {
    return  this.actions$.pipe(
      ofType(WatchlistActions.addFavoriteMovie),
      withLatestFrom(this.store.select(selectLikedMovies)),
      switchMap(([action, state]) => 
        this.databaseService.writeUserData(state).pipe(
          map(() => WatchlistActions.addFavoriteMovieSuccess()),
          catchError( async error => WatchlistActions.addFavoriteMovieFailed({error: error}) )
        )
      )
    )
  })

  getFavoriteMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WatchlistActions.getFavoriteMovieFromDatabase),
      switchMap(action => 
        this.databaseService.readTheData().pipe(
          map(movies => WatchlistActions.getFavoriteMovieSuccess({movies: movies})),
          tap(res => console.log(res) ),
          catchError(async error => WatchlistActions.getFavoriteMovieFailed({error: error}))
        )
      )
    )
  })
  constructor(private actions$: Actions, private databaseService: DatabaseService, private store: Store<AppState>) {}
}
