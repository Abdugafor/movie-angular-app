import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { BrowseActions } from '../action/browse.actions';
import { state } from '@angular/animations';

export const browseFeatureKey = 'browse';

export interface State {
  LikedMovies: Movie[]
}

export const initialState: State = {
  LikedMovies: []
};

export const reducer = createReducer(
  initialState,
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
  })
);

