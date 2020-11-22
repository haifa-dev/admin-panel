import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-req-indications',
  templateUrl: './proj-req-indications.component.html',
  styleUrls: ['./proj-req-indications.component.scss']
})
export class ProjReqIndicationsComponent implements OnInit {
  @Input() isFunded: boolean;
  @Input() communityOrProfit: string;
  constructor() {}

  ngOnInit(): void {}

}
