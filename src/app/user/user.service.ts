import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import { User } from './user.model';


@Injectable({providedIn: 'root'})
export class UserService {

  // tslint:disable-next-line:max-line-length
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get<User[]>('http://192.168.1.16:3000/api/v1/users')
      .pipe(
        map(userData =>  {
          return userData.map((user: any) => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              balance: user.balance
            };
          });
        })
      )
      .subscribe(transformedPools => {
        this.users = transformedPools;
        this.usersUpdated.next([...this.users]);
      });
  }

  getUsersUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getPool(id: string) {
    return {...this.users.find(p => p.id === id)};
  }

  addPool(user: User) {
    this.http
      .post<{success: boolean, userId: string}>(
        'http://192.168.1.16:3000/api/v1/users', user)
      .subscribe(responseData => {
        user.id = responseData.userId;
        this.users.push(user);
        this.usersUpdated.next( [...this.users] );
      });
  }

  updatePool(user: User) {
    this.http
      .put('http://192.168.1.16:3000/api/v1/users/' + user.id, user)
      .subscribe(response => {
        const updatedUsers = this.users.filter(user2 => user2.id !== user.id);
        updatedUsers.push(user);
        this.users = updatedUsers;
        this.usersUpdated.next([...this.users]);
      });
  }

  deletePool(userId: string) {
    this.http
      .delete('http://192.168.1.16:3000/api/v1/users/' + userId)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);
        this.usersUpdated.next( [...this.users] );
      });
  }
}
