import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isSmallScreen: boolean;
  @Output() emitMenu = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  openMenu() {
    this.emitMenu.emit();
  }

  logout() {
    this.authService.logout();
  }
}
