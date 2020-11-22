import { Component, OnInit } from '@angular/core';

interface NavOption {
  path: string;
  name: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navOptions: NavOption[] = [
    { path: '/dashboard', name: 'Charitable Project Requests' },
    { path: '/dashboard', name: 'Profitable ProjectRequests' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
