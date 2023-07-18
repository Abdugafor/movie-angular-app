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
      const filter = this.watchedMovies.filter(item => item.id === movie.id)

      if (filter.length === 0) {
        this.watchedMovies.unshift(movie)
      }
    }
  }

  public getWatchedMovies() {
    return this.watchedMovies
  }

  public removeWatchedMovie(movieId: number): void {
    this.watchedMovies = this.watchedMovies.filter(item => item.id !== movieId)
  }

  public addFavoriteMovie(movie: any) {

    movie.favorite = true
  
      if (this.favoriteMovies.length === 0) {
        this.favoriteMovies.push(movie)
      }else {
        const filter = this.favoriteMovies.filter(item => item.id === movie.id)

        if (filter.length === 0) {
          this.favoriteMovies.unshift(movie)
        }
      }
  }

  public getFavoriteMovies() {
    return this.favoriteMovies
  }

  public removeFavoriteMovie(movieId: number): void {
    this.favoriteMovies = this.favoriteMovies.filter(item => item.id !== movieId)
  }

}
