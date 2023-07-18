import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchedMovies
  favoriteMovies: any[] = []
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.watchedMovies = this.appService.getWatchedMovies()
    this.favoriteMovies = this.appService.getFavoriteMovies()
  }
}
