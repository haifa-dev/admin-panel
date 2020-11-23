import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { MatTableModule } from '@angular/material/table';
import { HostDirective } from './host.directive';
import { ColSimpleComponent } from './col-simple/col-simple.component';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [UsersComponent, HostDirective, ColSimpleComponent],
  imports: [CommonModule, UsersRoutingModule, MatTableModule, MatSortModule, MatCheckboxModule]
})
export class UsersModule {}
