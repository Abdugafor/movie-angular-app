import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';

export const WatchlistActions = createActionGroup({
  source: 'Watchlist',
  events: {
    'Add favorite Movie': props<{movie: Movie}>(),
    'Add favorite Movie success': emptyProps(),
    'Add favorite Movie failed': props<{error: string}>(),
    'Remove favorite Movie': props<{movieId: number}>(),
    'Add watched Movie': props<{movie: Movie}>(),
    'Remove watched Movie': props<{movieId: number}>(),
    // 'Get watchlist from Localstorage': props<{watchedMovies: string}>
    'Get favorite movie from Database': emptyProps(),
    'Get favorite movie success': props<{movies: Movie[]}>(),
    'Get favorite movie failed': props<{error: string}>(),
  }
});
