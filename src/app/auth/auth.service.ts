import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const COOKIE_NAME = 'haifa-dev_auth-token';
const COOKIE_EXP_DAYS = 30;

// login credentials
interface Credentials {
  username: string;
  password: string;
}

// user response body
interface User {
  email: string;
  id: string;
  name: string;
}

// server login / auth response
interface UserResponse {
  status: string;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = this.cookieService.get(COOKIE_NAME);
  rootUrl = environment.serverUrl;
  // user state
  authenticated$ = new BehaviorSubject<boolean | null>(null) as BehaviorSubject<boolean>;
  loading$ = new BehaviorSubject<boolean>(true);
  username = '';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(credentials: Credentials) {
    return this.http.post<UserResponse>(`${this.rootUrl}/users/login`, credentials).pipe(
      map(response => {
        this.username = response.user.name;
        this.cookieService.set(COOKIE_NAME, response.token, COOKIE_EXP_DAYS);
        this.authenticated$.next(true);
        this.loading$.next(false);
        return response;
      })
    );
  }

  checkAuth() {
    return this.http.get<UserResponse>(`${this.rootUrl}/users`).subscribe({
      next: response => {
        this.username = response.user.name;
        this.authenticated$.next(true);
        this.loading$.next(false);
      },
      error: ({ error }) => {
        this.authenticated$.next(false);
        this.loading$.next(false);
        if (error.status) this.cookieService.delete(COOKIE_NAME);
      }
    });
  }

  logout() {
    this.cookieService.delete(COOKIE_NAME, '/');
    window.location.href = '/';
  }
}
