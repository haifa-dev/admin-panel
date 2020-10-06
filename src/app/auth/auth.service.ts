import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = environment.serverUrl;
  authenticated$ = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.rootUrl}/users`, credentials).subscribe(user => {
      this.authenticated$.next(true);
      console.log(user);
    });
  }
}
