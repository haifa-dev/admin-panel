import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfitProjReq } from '../profit-proj-req';
import { ProfitProjReqService } from '../profit-proj-req.service';

@Component({
  selector: 'app-profit-proj-req-home',
  templateUrl: './profit-proj-req-home.component.html',
  styleUrls: ['./profit-proj-req-home.component.scss'],
})
export class ProfitProjReqHomeComponent implements OnInit {
  profitProjReqs: ProfitProjReq[];
  currentId = '';

  constructor(private profitProjReqService: ProfitProjReqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.profitProjReqService.getPlural().subscribe(profitProjReqs => {
      this.profitProjReqs = profitProjReqs;
    });

    this.route.firstChild?.params.subscribe(({ id }) => {
      this.currentId = id;
    });
  }

  click(profitProjReq: ProfitProjReq) {
    if (!profitProjReq.reed) profitProjReq.reed = true;
  }
}
