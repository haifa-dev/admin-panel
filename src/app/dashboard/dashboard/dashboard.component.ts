import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  menu = false;
  isSmallScreen: boolean;

  constructor(private authService: AuthService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe('(min-width: 1200px)').subscribe(value => {
      console.log(value);
      this.isSmallScreen = value.matches;
    });
  }

  openMenu() {
    this.menu = true;
  }

  logout() {
    this.authService.logout();
  }
}
