import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../user.reducer';

export interface State {
  [fromUser.userFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromUser.userFeatureKey]: fromUser.reducer,
};
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [debug]
  : [];
