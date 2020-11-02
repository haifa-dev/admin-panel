import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

interface DocumentHeader {
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}

@Component({
  selector: 'app-document-header',
  templateUrl: './document-header.component.html',
  styleUrls: ['./document-header.component.scss']
})
export class DocumentHeaderComponent implements OnInit {
  @Input() documentHeader: DocumentHeader;
  constructor() {}

  ngOnInit(): void {}

  getRelativeTime(date) {
    const d = Date.parse(date);
    return moment(d).fromNow();
  }
}
