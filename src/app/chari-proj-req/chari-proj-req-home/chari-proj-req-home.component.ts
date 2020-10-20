import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChariProjReq } from '../chari-proj-req';
@Component({
  selector: 'app-chari-proj-req-home',
  templateUrl: './chari-proj-req-home.component.html',
  styleUrls: ['./chari-proj-req-home.component.scss'],
})
export class ChariProjReqHomeComponent implements OnInit {
  chariProjReqs: ChariProjReq[];
  currentChariProjReq: ChariProjReq;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe(({ id }) => {
    //   this.currentChariProjReq = this.chariProjReqs[id];
    // });
  }
}
