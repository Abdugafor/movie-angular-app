import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromWatchlist from './reducer/watchlist.reducer'

export interface AppState {
  [fromWatchlist.watchlistFeatureKey]: fromWatchlist.State,
}

export const reducers: ActionReducerMap<AppState> = {
  [fromWatchlist.watchlistFeatureKey]: fromWatchlist.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
