import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout()
  }
}
