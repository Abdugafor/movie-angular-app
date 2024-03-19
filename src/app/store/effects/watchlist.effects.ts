import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WatchlistActions } from '../action/watchlist.actions';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { selectLikedMovies, selectWatchedMovies } from '../selectors/watchlist.selectors';



@Injectable()
export class WatchlistEffects {

  addFavoriteMovies$ = createEffect(() => {
    return  this.actions$.pipe(
      ofType(WatchlistActions.addFavoriteMovie, WatchlistActions.removeFavoriteMovie),
      withLatestFrom(this.store.select(selectLikedMovies)),
      switchMap(([action, state]) => 
        this.databaseService.writeUserData('favoriteMovies', state).pipe(
          map(() => WatchlistActions.updateFavoriteMovieSuccess()),
          catchError( async error => WatchlistActions.updateFavoriteMovieFailed({error: error}) )
        )
      )
    )
  })

  addWatchedMovies$ = createEffect(() => {
    return  this.actions$.pipe(
      ofType(WatchlistActions.addWatchedMovie , WatchlistActions.removeWatchedMovie),
      withLatestFrom(this.store.select(selectWatchedMovies)),
      switchMap(([action, state]) => 
        this.databaseService.writeUserData('watchedMovies', state).pipe(
          map(() => WatchlistActions.updateWatchedMovieSuccess()),
          catchError( async error => WatchlistActions.updateWathchedMovieFailed({error: error}) )
        )
      )
    )
  })

  getUserData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WatchlistActions.getWatchlistFromDatabase),
      switchMap(action => 
        this.databaseService.readTheData().pipe(
          map(user => WatchlistActions.getWatchlistSuccess({userData: user})),
          catchError(async error => WatchlistActions.getWatchlistFailed({error: error}))
        )
      )
    )
  })
  constructor(private actions$: Actions, private databaseService: DatabaseService, private store: Store<AppState>) {}
}
