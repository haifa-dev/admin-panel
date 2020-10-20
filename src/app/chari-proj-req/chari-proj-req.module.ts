import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChariProjReqRoutingModule } from './chari-proj-req-routing.module';
import { ChariProjReqHomeComponent } from './chari-proj-req-home/chari-proj-req-home.component';
import { ChariProjReqShowComponent } from './chari-proj-req-show/chari-proj-req-show.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChariProjReqHomeComponent, ChariProjReqShowComponent],
  imports: [
    CommonModule,
    ChariProjReqRoutingModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    SharedModule,
  ],
  exports: [],
})
export class ChariProjReqModule {}
