import {  createFeatureSelector, createSelector } from '@ngrx/store';
import { State, watchlistFeatureKey } from '../reducer/watchlist.reducer';

export const selectMovieFeature = createFeatureSelector<State>(
    watchlistFeatureKey
)

export const selectLikedMovies = createSelector(
    selectMovieFeature,
    (state: State) => state.LikedMovies
)

export const selectWatchedMovies = createSelector(
    selectMovieFeature,
    (state: State) => state.WatchedMovies
)

export const selectError = createSelector(
    selectMovieFeature,
    (state: State) => state.error
)