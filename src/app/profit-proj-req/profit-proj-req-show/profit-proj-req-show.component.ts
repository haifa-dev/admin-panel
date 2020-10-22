import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfitProjReq } from '../profit-proj-req';
import { ProfitProjReqService } from '../profit-proj-req.service';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-profit-proj-req-show',
  templateUrl: './profit-proj-req-show.component.html',
  styleUrls: ['./profit-proj-req-show.component.scss'],
})
export class ProfitProjReqShowComponent implements OnInit {
  profitProjReq: ProfitProjReq;
  loading = true;
  failed = false;
  constructor(private route: ActivatedRoute, private profitProjReqService: ProfitProjReqService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => {
          this.loading = true;
          this.failed = false;
          return this.profitProjReqService.getSingular(id).pipe(
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
      .subscribe(profitProjReq => {
        this.profitProjReq = profitProjReq;
        console.log(profitProjReq);
      });
  }
}
