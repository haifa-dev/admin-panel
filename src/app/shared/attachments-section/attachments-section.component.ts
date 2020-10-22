import { Component, Input, OnInit } from '@angular/core';
import { Attachments } from '../attachments';


@Component({
  selector: 'app-attachments-section',
  templateUrl: './attachments-section.component.html',
  styleUrls: ['./attachments-section.component.scss']
})
export class AttachmentsSectionComponent implements OnInit {
  @Input() attachments: Attachments[];
  constructor() {}

  ngOnInit(): void {}

  extractSubDomain(url: string) {
    const name = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim);
    return name.length ? name[0] : 'Website';
  }
}
