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
  currentActiveItem = '';
  colors = ['#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A'];

  constructor() {}

  ngOnInit(): void {}

  getUserNameAndLetter = (name: string) => {
    const letterArr = name
      .replace(/[^A-Za-z\s]/gm, '')
      .trim()
      .match(/\s[A-Z]|^[A-Za-z]/g)
      .map(letter => letter.trim());
    if (!letterArr) return 'U';
    const [firstLetter, secondLetter] = letterArr;
    return secondLetter ? `${firstLetter}${secondLetter}` : firstLetter;
  };

  setAvatarColor(name) {
    const arrLastIndex = this.colors.length - 1;
    const letter = this.getUserNameAndLetter(name);
    let i = Number(letter.toLowerCase().charCodeAt(0) - 97);
    while (i > arrLastIndex) i -= arrLastIndex;
    return this.colors[i];
  }

  onClick(id: string) {
    this.currentActiveItem = id;
  }
}
