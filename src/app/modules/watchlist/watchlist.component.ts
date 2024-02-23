import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { AppService } from 'src/app/services/app.service';
import { RouteService } from 'src/app/services/route.service';
import { AppState } from 'src/app/store';
import { BrowseActions } from 'src/app/store/action/browse.actions';
import { selectLikedMovies } from 'src/app/store/selectors/browse.selectors';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit , OnDestroy{
  watchedMovies
  favoriteMovies: Observable<Movie[]>

  constructor(
    private appService: AppService, 
    private routeService: RouteService,
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    this.onRefresh()
    this.favoriteMovies = this.store.pipe(select(selectLikedMovies))
  }

  ngOnDestroy(): void {
    this.routeService.setPreviousRoute('/watchlist')
  }

  public onRemoveFavorite(movieId: number): void {
    this.store.dispatch(BrowseActions.removeFavoriteMovie({movieId: movieId}))
    this.onRefresh()
  }

 public onRemoveWatched(movieId: number):void {
    this.appService.removeWatchedMovie(movieId)
  }

  private onRefresh() {
    this.watchedMovies = this.appService.getWatchedMovies()
  }
}
