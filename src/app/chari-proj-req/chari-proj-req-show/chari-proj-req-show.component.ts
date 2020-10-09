import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChariProjReq } from '../chari-proj-req';
import { ChariProjReqService } from '../chari-proj-req.service';

@Component({
  selector: 'app-chari-proj-req-show',
  templateUrl: './chari-proj-req-show.component.html',
  styleUrls: ['./chari-proj-req-show.component.scss'],
})
export class ChariProjReqShowComponent implements OnInit {
  chariProjReq: ChariProjReq;
  constructor(private route: ActivatedRoute, private chariProjReqService: ChariProjReqService) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.chariProjReq = this.chariProjReqService.getCurrentChariProjArr(id);
    });
  }
}
