import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfitProjReq } from '../profit-proj-req';
import { ProfitProjReqService } from '../profit-proj-req.service';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profit-proj-req-show',
  templateUrl: './profit-proj-req-show.component.html',
  styleUrls: ['./profit-proj-req-show.component.scss'],
})
export class ProfitProjReqShowComponent implements OnInit {
  profitProjReq: ProfitProjReq;
  loading = true;
  constructor(private route: ActivatedRoute, private profitProjReqService: ProfitProjReqService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => this.profitProjReqService.getSingular(id))
      )
      .subscribe(profitProjReq => {
        this.profitProjReq = profitProjReq;
        this.loading = false;
      });
  }
}
