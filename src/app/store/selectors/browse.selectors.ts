import {  createFeatureSelector, createSelector } from '@ngrx/store';
import { State, browseFeatureKey } from '../reducer/browse.reducer';

export const selectMovieFeature = createFeatureSelector<State>(
    browseFeatureKey
)

export const selectLikedMovies = createSelector(
    selectMovieFeature,
    (state: State) => state.LikedMovies
)

export const selectWatchedMovies = createSelector(
    selectMovieFeature,
    (state: State) => state.WatchedMovies
)