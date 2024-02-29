import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/interfaces/movies.interface';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { WatchlistActions } from '../store/action/watchlist.actions';


@Injectable({
  providedIn: 'root'
})
export class RouteService {
  previousRoute: string

  constructor(private router: Router, private store: Store<AppState>) { }

  setPreviousRoute(route: string) {
    this.previousRoute = route
  }

  getPreviousRoute() {
    return this.previousRoute
  }

  navigate(movie: Movie) {
    this.router.navigate(['browse', movie.id])
    this.store.dispatch(WatchlistActions.addWatchedMovie({movie: movie}))
  }
}
