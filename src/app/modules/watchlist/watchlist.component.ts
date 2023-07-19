import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchedMovies
  favoriteMovies: any[] = []
  constructor(private appService: AppService, private database:  DatabaseService) {}

  ngOnInit(): void {
    this.onRefresh()
    this.database.getData()
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
