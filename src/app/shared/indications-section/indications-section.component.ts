import { Component, Input, OnInit } from '@angular/core';
import { Indication } from '../indication';

@Component({
  selector: 'app-indications-section',
  templateUrl: './indications-section.component.html',
  styleUrls: ['./indications-section.component.scss']
})
export class IndicationsSectionComponent implements OnInit {
  @Input() isFunded: boolean;
  @Input() communityOrProfit: string;
  constructor() {}

  ngOnInit(): void {}
}
