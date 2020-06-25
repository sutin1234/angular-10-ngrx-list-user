import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, userFeatureKey } from './user.reducer';
import { IUser } from './interfaces/user.interface';

const getUserFeatureState = createFeatureSelector<State>(userFeatureKey);

export const getUser = createSelector(
  getUserFeatureState,
  (state) => state.users
);

export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);
