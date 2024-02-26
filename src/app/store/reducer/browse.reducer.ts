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
    return {
      ...state,
      LikedMovies: [...state.LikedMovies, action.movie]
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
    return {
      ...state,
      WatchedMovies: [...state.WatchedMovies, action.movie]
    }
  }),
  on(BrowseActions.removeWatchedMovie, (state, action) => {
    return {
      ...state,
      WatchedMovies: [...state.WatchedMovies].filter(movie => movie.id !== action.movieId)
    }
  })
);

