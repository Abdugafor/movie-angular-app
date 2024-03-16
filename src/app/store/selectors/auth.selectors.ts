import {  createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducer/auth.reducer';
import { authFeatureKey } from '../reducer/auth.reducer';

export const selectAuthFeature = createFeatureSelector<State>( authFeatureKey )

export const selectSignUpErrorMessage = createSelector(
    selectAuthFeature,
    (state: State) => state.SignUpErrorMessage
)

export const selectLogInErrorMessage = createSelector(
    selectAuthFeature,
    (state: State) => state.LogInErrorMessage
)

export const selectUser = createSelector(
    selectAuthFeature,
    (state: State) => state.user
)