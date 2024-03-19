import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';
import { UserData } from 'src/app/models/interfaces/watchlist.interface';

export const WatchlistActions = createActionGroup({
  source: 'Watchlist',
  events: {
    // favorite Movie Actions
    'Add favorite Movie': props<{movie: Movie}>(),
    'Update favorite Movie success': emptyProps(),
    'Update favorite Movie failed': props<{error: string}>(),
    'Remove favorite Movie': props<{movieId: number}>(),

    // Watched Movie Actions

    'Add watched Movie': props<{movie: Movie}>(),
    'Update watched Movie success': emptyProps(),
    'Update wathched Movie failed': props<{error: string}>(),
    'Remove watched Movie': props<{movieId: number}>(),

    'Get watchlist from Database': emptyProps(),
    'Get watchlist success': props<{userData: UserData}>(),
    'Get watchlist failed': props<{error: string}>(),

    'Clear state': emptyProps()
  }
});
