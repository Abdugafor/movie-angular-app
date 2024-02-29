import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';

export const WatchlistActions = createActionGroup({
  source: 'Watchlist',
  events: {
    'Add favorite Movie': props<{movie: Movie}>(),
    'Remove favorite Movie': props<{movieId: number}>(),
    'Add watched Movie': props<{movie: Movie}>(),
    'Remove watched Movie': props<{movieId: number}>(),
    'Get watchlist from Localstorage': props<{watchedMovies: string}>
  }
});
