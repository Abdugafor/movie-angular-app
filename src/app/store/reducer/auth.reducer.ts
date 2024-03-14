import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../action/auth.actions';

export const authFeatureKey = 'auth';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

