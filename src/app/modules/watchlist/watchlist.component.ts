import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { RouteService } from 'src/app/services/route.service';
import { AppState } from 'src/app/store';
import { BrowseActions } from 'src/app/store/action/browse.actions';
import { selectLikedMovies, selectWatchedMovies } from 'src/app/store/selectors/browse.selectors';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})

export class WatchlistComponent implements OnInit , OnDestroy{
  watchedMovies: Observable<Movie[]>
  favoriteMovies: Observable<Movie[]>

  constructor(
    private routeService: RouteService,
    private store: Store<AppState>,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.favoriteMovies = this.store.pipe(select(selectLikedMovies))
    this.watchedMovies = this.store.pipe(select(selectWatchedMovies))
  }

  ngOnDestroy(): void {
    this.routeService.setPreviousRoute('/watchlist')
  }

  public onRemoveFavorite(movieId: number): void {
    this.store.dispatch(BrowseActions.removeFavoriteMovie({movieId: movieId}))
  }

  public onRemoveWatched(movieId: number):void {
    this.store.dispatch(BrowseActions.removeWatchedMovie({movieId: movieId}))
  }

  public onNavigate(movieId: number) {
    this.router.navigate(['browse', movieId])
  } 

}
