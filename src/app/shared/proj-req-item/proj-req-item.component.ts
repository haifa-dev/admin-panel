import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proj-req-item',
  templateUrl: './proj-req-item.component.html',
  styleUrls: ['./proj-req-item.component.scss'],
})
export class ProjReqItemComponent implements OnInit {
  @Input() projReq;
  currentId = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.firstChild.params.subscribe(({ id }) => {
      this.currentId = id;
    });
  }

  isActive(id: string) {
    return this.currentId === id;
  }

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
    const colors = ['#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A'];
    const arrLastIndex = colors.length - 1;
    const letter = this.getUserNameAndLetter(name);
    let i = Number(letter.toLowerCase().charCodeAt(0) - 97);
    while (i > arrLastIndex) i -= arrLastIndex;
    return colors[i];
  }
}
