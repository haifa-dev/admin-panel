import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * when we load the route we don't know if the user done the authentication process
   * DON'T MUTATE THE authenticated& authService Property here.
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.authenticated$.pipe(
      // skips all items emitted by the source Observable as long as a specified condition holds true,
      // to make sure that the auth check is done.
      skipWhile(value => value === null),
      // mark the underlying observable as complete
      take(1),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
