import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-attachment-section',
  templateUrl: './attachment-section.component.html',
  styleUrls: ['./attachment-section.component.scss'],
})
export class AttachmentSectionComponent implements OnInit {
  @Input() name: string;
  @Input() link: string;
  constructor() {}

  ngOnInit(): void {}

  extractSubDomain(url: string) {
    const name = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim);
    return name.length ? name[0] : 'Website';
  }
}
