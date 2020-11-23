import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-col-simple',
  templateUrl: './col-simple.component.html',
  styleUrls: ['./col-simple.component.scss']
})
export class ColSimpleComponent implements OnInit {
  @Input() data: string;
  constructor() {}

  ngOnInit(): void {}
}
