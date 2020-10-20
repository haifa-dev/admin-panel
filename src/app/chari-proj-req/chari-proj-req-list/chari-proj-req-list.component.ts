import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private chariProjReqService: ChariProjReqService) {}

  ngOnInit(): void {
    this.chariProjReqService.getChariProjReqArr().subscribe(chariProjReqs => {
      this.chariProjReqs = chariProjReqs;
    });
  }
}
