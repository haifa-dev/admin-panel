import * as moment from 'moment';
import { Component, Input, OnInit } from '@angular/core';
interface ProjectRequest {
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

interface MatMenuItem {
  title: string;
  icon: string;
  url: string;
}
@Component({
  selector: 'app-proj-req-header',
  templateUrl: './proj-req-header.component.html',
  styleUrls: ['./proj-req-header.component.scss']
})
export class ProjReqHeaderComponent implements OnInit {
  @Input() projectRequest: ProjectRequest;
  constructor() {}
  matMenuItems: MatMenuItem[] = [{ title: 'delete', icon: 'delete', url: '' }];
  ngOnInit(): void {}

  getRelativeTime(date) {
    const d = Date.parse(date);
    return moment(d).fromNow();
  }
}
