import { IUser } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
