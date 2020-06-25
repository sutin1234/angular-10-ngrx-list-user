import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadUsers),
    mergeMap((action) =>
      this.userService
        .getUsers()
        .pipe(map((users) => new UserActions.LoadUsersSuccess({ data: users })))
    )
  );
}
