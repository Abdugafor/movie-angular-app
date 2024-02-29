import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { WatchlistActions } from '../action/watchlist.actions';
import { state } from '@angular/animations';

export const watchlistFeatureKey = 'watchlist';

// localstorage items name 
const lcWatchedMovies = 'watched movies'
const lcFavoriteMovies = 'favorite movies'


export interface State {
  LikedMovies: Movie[],
  WatchedMovies: Movie[]
}

export const initialState: State = {
  LikedMovies: [],
  WatchedMovies: []
};


export const reducer = createReducer(
  initialState,

  //  Add and Delete favorite movies

  on(WatchlistActions.addFavoriteMovie, (state, action) => {
    const movies: Movie[] = [action.movie, ...state.LikedMovies, ]
    
    if (!isAdded(state.LikedMovies, action.movie)) {
      addToLocalStorage(lcFavoriteMovies, movies)

      return {
        ...state,
        LikedMovies: movies
      }
    }
  
    return {
      ...state,
    }
  }),
  on(WatchlistActions.removeFavoriteMovie, (state, action) => {
    const movies: Movie[] = [...state.LikedMovies].filter(movie => movie.id !== action.movieId)

    addToLocalStorage(lcFavoriteMovies, movies)

    return {
      ...state,
      LikedMovies: movies
    }
  }),

  //  Add and Delete watched movies

  on(WatchlistActions.addWatchedMovie, (state, action) => {

    if (!isAdded(state.WatchedMovies, action.movie)) {
      const moviesArr: Movie[] =  [action.movie , ...state.WatchedMovies]

      addToLocalStorage(lcWatchedMovies, moviesArr)

      return {
        ...state,
        WatchedMovies: moviesArr
      }
    }

    const movieIndex = state.WatchedMovies.findIndex(movie => movie.id === action.movie.id)
    const updatedMovies = [...state.WatchedMovies];
    updatedMovies.splice(movieIndex, 1);

    addToLocalStorage(lcWatchedMovies, [action.movie , ...updatedMovies])

    return {
      ...state,
      WatchedMovies: [action.movie, ...updatedMovies]
    }
  }),

  on(WatchlistActions.removeWatchedMovie, (state, action) => {
    const updatedMovies = [...state.WatchedMovies].filter(movie => movie.id !== action.movieId)

    addToLocalStorage(lcWatchedMovies, updatedMovies)

    return {
      ...state,
      WatchedMovies: updatedMovies
    }
  }),

  //  Get and Set Movies from localstorage

  on(WatchlistActions.getWatchlistFromLocalstorage, (state, _) => {
    const watchedMovies: Movie[] = JSON.parse(localStorage.getItem(lcWatchedMovies))
    const likedMovies: Movie[] = JSON.parse(localStorage.getItem(lcFavoriteMovies))

      return {
        ...state,
        WatchedMovies: watchedMovies === null ? [] : watchedMovies,
        LikedMovies: likedMovies === null ? [] : likedMovies
      }
  })
);

function isAdded(arr: Movie[], movie: Movie): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === movie.id) {
      return true
    }
  }
  return false
}

function addToLocalStorage(lcStorageItemName: string, list: Movie[]) {
  localStorage.setItem(lcStorageItemName, JSON.stringify(list))
}

