import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChariProjReq } from '../chari-proj-req';
import { ChariProjReqService } from '../chari-proj-req.service';

@Component({
  selector: 'app-chari-proj-req-list',
  templateUrl: './chari-proj-req-list.component.html',
  styleUrls: ['./chari-proj-req-list.component.scss'],
})
export class ChariProjReqListComponent implements OnInit {
  chariProjReqs: ChariProjReq[];
  currentId = '';

  constructor(private chariProjReqService: ChariProjReqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.chariProjReqService.getPlural().subscribe(chariProjReqs => {
      this.chariProjReqs = chariProjReqs;
    });

    this.route.firstChild?.params.subscribe(({ id }) => {
      this.currentId = id;
    });
  }

  click(chariProjReq: ChariProjReq): void {
    if (!chariProjReq.reed) chariProjReq.reed = true;
  }
}
