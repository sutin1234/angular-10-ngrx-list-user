import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import * as fromUser from './user.selectors';
import * as UserActions from './user.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular 10 NGRX State Management';
  users$: IUser[] = [];
  errorMessage: '';

  constructor(private userService: UserService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new UserActions.LoadUsers());
    this.store
      .pipe(select(fromUser.getUser))
      .subscribe((users) => (this.users$ = users));
  }
}
