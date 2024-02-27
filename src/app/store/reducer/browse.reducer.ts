import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { BrowseActions } from '../action/browse.actions';
import { state } from '@angular/animations';

export const browseFeatureKey = 'browse';

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

  on(BrowseActions.addFavoriteMovie, (state, action) => {

    if (!isAdded(state.LikedMovies, action.movie)) {
      return {
        ...state,
        LikedMovies: [...state.LikedMovies, action.movie]
      }
    }
  
    return {
      ...state,
    }
  }),
  on(BrowseActions.removeFavoriteMovie, (state, action) => {
    return {
      ...state,
      LikedMovies: [...state.LikedMovies].filter(movie => movie.id !== action.movieId)
    }
  }),

  //  Add and Delete watched movies

  on(BrowseActions.addWatchedMovie, (state, action) => {

    if (!isAdded(state.WatchedMovies, action.movie)) {
      return {
        ...state,
        WatchedMovies: [action.movie, ...state.WatchedMovies, ]
      }
    }

    const movieIndex = state.WatchedMovies.findIndex(movie => movie.id === action.movie.id)
    const updatedMovies = [...state.WatchedMovies];
    updatedMovies.splice(movieIndex, 1);

    console.log(updatedMovies)
    return {
      ...state,
      WatchedMovies: [action.movie, ...updatedMovies]
    }
  }),
  on(BrowseActions.removeWatchedMovie, (state, action) => {
    
    return {
      ...state,
      WatchedMovies: [...state.WatchedMovies].filter(movie => movie.id !== action.movieId)
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

