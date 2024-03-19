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
  WatchedMovies: Movie[],
  error: string
}

export const initialState: State = {
  LikedMovies: [],
  WatchedMovies: [],
  error: null
};


export const reducer = createReducer(
  initialState,

  //  Add and Delete favorite movies

  on(WatchlistActions.addFavoriteMovie, (state, action) => {
    const movies: Movie[] = [action.movie, ...state.LikedMovies, ]
    
    if (!isAdded(state.LikedMovies, action.movie)) {

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

    return {
      ...state,
      LikedMovies: movies
    }
  }),

  //  Add and Delete watched movies

  on(WatchlistActions.addWatchedMovie, (state, action) => {

    if (!isAdded(state.WatchedMovies, action.movie)) {
      const moviesArr: Movie[] =  [action.movie , ...state.WatchedMovies]

      return {
        ...state,
        WatchedMovies: moviesArr
      }
    }

    const movieIndex = state.WatchedMovies.findIndex(movie => movie.id === action.movie.id)
    const updatedMovies = [...state.WatchedMovies];
    updatedMovies.splice(movieIndex, 1);

    return {
      ...state,
      WatchedMovies: [action.movie, ...updatedMovies]
    }
  }),

  on(WatchlistActions.removeWatchedMovie, (state, action) => {
    const updatedMovies = [...state.WatchedMovies].filter(movie => movie.id !== action.movieId)

    return {
      ...state,
      WatchedMovies: updatedMovies
    }
  }),

  on(WatchlistActions.getWatchlistSuccess, (state , action) => {
    return {
      ...state,
      LikedMovies: action.userData.favoriteMovies === undefined  ?  [] : action.userData.favoriteMovies,
      WatchedMovies: action.userData.watchedMovies 
    }
  }),

  on(WatchlistActions.updateWathchedMovieFailed, WatchlistActions.updateFavoriteMovieFailed, (state, action) => {
    return {
      ...state,
      error: action.error
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

