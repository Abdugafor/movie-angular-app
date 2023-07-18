import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  watchedMovies: any[] = []
  favoriteMovies: any[] = []
  
  constructor() { }

  public addWatchedMovie(movie: any): void {
    if (this.watchedMovies.length === 0) {
      this.watchedMovies.push(movie)
    }else {
      this.watchedMovies.forEach(item => {
        if (item.id !== movie.id) {
          this.watchedMovies.push(movie)
        }
      })
    }
  }

  public getWatchedMovies() {
    return this.watchedMovies
  }

  public addFavoriteMovie(movie: any) {
      if (this.favoriteMovies.length === 0) {
        this.favoriteMovies.push(movie)
      }else {
        this.favoriteMovies.forEach(item => {
          if (item.id !== movie.id) {
            this.favoriteMovies.push(movie)
          } 
        })
      }
  }

  public getFavoriteMovies() {
    return this.favoriteMovies
  }

}
