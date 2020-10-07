import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface Credentials {
  username: string;
  password: string;
}

interface User {
  email: string;
  id: string;
  name: string;
}

interface UserResponse {
  status: string;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = environment.serverUrl;
  authenticated$ = new BehaviorSubject(null);
  token$ = new BehaviorSubject(null);

  username = 'Admin';

  constructor(private http: HttpClient) {}

  login(credentials: Credentials) {
    return this.http.post<UserResponse>(`${this.rootUrl}/users/login`, credentials).pipe(
      map(response => {
        this.username = response.user.name;
        this.authenticated$.next(true);
        this.token$.next(response.token);
        return response;
      })
    );
  }
}
