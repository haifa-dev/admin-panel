import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChariProjReqRoutingModule } from './chari-proj-req-routing.module';
import { ChariProjReqListComponent } from './chari-proj-req-list/chari-proj-req-list.component';
import { ChariProjReqHomeComponent } from './chari-proj-req-home/chari-proj-req-home.component';
import { ChariProjReqShowComponent } from './chari-proj-req-show/chari-proj-req-show.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChariProjReqListComponent, ChariProjReqHomeComponent, ChariProjReqShowComponent],
  imports: [
    CommonModule,
    ChariProjReqRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    SharedModule,
  ],
  exports: [],
})
export class ChariProjReqModule {}
