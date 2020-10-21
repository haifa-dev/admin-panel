import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-panel',
  templateUrl: './link-panel.component.html',
  styleUrls: ['./link-panel.component.scss'],
})
export class LinkPanelComponent implements OnInit {
  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
