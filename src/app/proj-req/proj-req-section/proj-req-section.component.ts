import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-req-section',
  templateUrl: './proj-req-section.component.html',
  styleUrls: ['./proj-req-section.component.scss']
})
export class ProjReqSectionComponent implements OnInit {
  @Input() title: string;
  @Input() data: string;

  constructor() {}

  ngOnInit(): void {}
}
