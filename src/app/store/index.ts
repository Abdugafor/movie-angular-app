import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromBrowse from './reducer/browse.reducer'

export interface AppState {
  [fromBrowse.browseFeatureKey]: fromBrowse.State
}

export const reducers: ActionReducerMap<AppState> = {
  [fromBrowse.browseFeatureKey]: fromBrowse.reducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
