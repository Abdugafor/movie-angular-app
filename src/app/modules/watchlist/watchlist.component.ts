import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit , OnDestroy{
  watchedMovies
  favoriteMovies: any[] = []

  constructor(private appService: AppService, private routeService: RouteService) {}

  ngOnInit(): void {
    this.onRefresh()
  }

  ngOnDestroy(): void {
    this.routeService.setPreviousRoute('/watchlist')
  }

  public onRemoveFavorite(movieId: number): void {
    this.appService.removeFavoriteMovie(movieId)
    this.onRefresh()
  }

 public onRemoveWatched(movieId: number):void {
    this.appService.removeWatchedMovie(movieId)
    this.onRefresh()
  }

  private onRefresh() {
    this.watchedMovies = this.appService.getWatchedMovies()
    this.favoriteMovies = this.appService.getFavoriteMovies()
  }
}
