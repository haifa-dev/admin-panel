import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const AUTH_COOKIE = 'haifa-dev_auth-token';
const MAX_DAYS_EXP = 30;

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
  // auth token properties
  cookieName = 'haifa-dev_auth-token';
  cookieMaxDaysExp = 30;
  token = this.cookieService.get(this.cookieName);
  // server base url
  rootUrl = environment.serverUrl;
  // user state
  authenticated$ = new BehaviorSubject(null);
  username = 'Admin';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  login(credentials: Credentials) {
    return this.http.post<UserResponse>(`${this.rootUrl}/users/login`, credentials).pipe(
      map(response => {
        this.username = response.user.name;
        this.cookieService.set(this.cookieName, response.token, this.cookieMaxDaysExp);
        this.authenticated$.next(true);
        return response;
      })
    );
  }

  checkAuth() {
    return this.http.get<UserResponse>(`${this.rootUrl}/users`).subscribe({
      next: response => {
        this.username = response.user.name;
        this.authenticated$.next(true);
        this.router.navigateByUrl('/dashboard');
      },
      error: ({ error }) => {
        this.authenticated$.next(false);
        if (error.status) this.cookieService.delete(this.cookieName);
      },
    });
  }

  logout() {
    this.cookieService.delete(this.cookieName);
    window.location.href = '/';
  }
}
