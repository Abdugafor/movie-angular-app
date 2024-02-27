import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from 'src/app/models/interfaces/movies.interface';

export const BrowseActions = createActionGroup({
  source: 'Browse',
  events: {
    'Add favorite Movie': props<{movie: Movie}>(),
    'Remove favorite Movie': props<{movieId: number}>(),
    'Add watched Movie': props<{movie: Movie}>(),
    'Remove watched Movie': props<{movieId: number}>()

  }
});
