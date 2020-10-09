import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChariProjReq } from '../chari-proj-req';

@Component({
  selector: 'app-chari-proj-req-list',
  templateUrl: './chari-proj-req-list.component.html',
  styleUrls: ['./chari-proj-req-list.component.scss'],
})
export class ChariProjReqListComponent implements OnInit {
  displayCol = ['name', 'inbox', 'date'];
  @Input() chariProjReqs: ChariProjReq[];
  @Output() ChariProjReqSelect = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(target: any) {
    console.log(target.target);
    // this.ChariProjReqSelect.emit();
  }
}
