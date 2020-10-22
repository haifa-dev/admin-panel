import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ChariProjReq } from '../chari-proj-req';
import { ChariProjReqService } from '../chari-proj-req.service';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-chari-proj-req-show',
  templateUrl: './chari-proj-req-show.component.html',
  styleUrls: ['./chari-proj-req-show.component.scss'],
})
export class ChariProjReqShowComponent implements OnInit {
  chariProjReq: ChariProjReq;
  loading = true;
  failed = false;

  constructor(private route: ActivatedRoute, private chariProjReqService: ChariProjReqService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => {
          this.loading = true;
          this.failed = false;
          return this.chariProjReqService.getSingular(id).pipe(
            catchError(err => {
              console.error(err.error.message);

              this.loading = false;
              this.failed = true;

              return EMPTY;
            }),
            map(value => {
              this.loading = false;
              this.failed = false;
              return value;
            })
          );
        })
      )
      .subscribe(chariProjReq => (this.chariProjReq = chariProjReq));
  }
}
