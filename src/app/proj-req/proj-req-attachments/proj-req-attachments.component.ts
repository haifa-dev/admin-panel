import { Component, Input, OnInit } from '@angular/core';

interface Attachments {
  title: string;
  address: string;
}

@Component({
  selector: 'app-proj-req-attachments',
  templateUrl: './proj-req-attachments.component.html',
  styleUrls: ['./proj-req-attachments.component.scss']
})
export class ProjReqAttachmentsComponent implements OnInit {

  @Input() attachments: Attachments[];
  constructor() {}

  ngOnInit(): void {}

  extractSubDomain(url: string) {
    const name = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim);
    return name.length ? name[0] : 'Website';
  }
}
