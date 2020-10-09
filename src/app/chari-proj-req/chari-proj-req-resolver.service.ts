import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChariProjReq } from './chari-proj-req';
import { ChariProjReqService } from './chari-proj-req.service';

@Injectable({
  providedIn: 'root',
})
export class ChariProjReqResolverService implements Resolve<ChariProjReq[]> {
  constructor(private chariProjReqService: ChariProjReqService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.chariProjReqService.getChariProjReqArr().pipe(
      catchError(() => {
        this.router.navigateByUrl('/dashboard/not-found');
        return EMPTY;
      })
    );
  }
}
