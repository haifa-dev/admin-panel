import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChariProjReqRoutingModule } from './chari-proj-req-routing.module';
import { ChariProjReqListComponent } from './chari-proj-req-list/chari-proj-req-list.component';
import { ChariProjReqHomeComponent } from './chari-proj-req-home/chari-proj-req-home.component';
import { ChariProjReqShowComponent } from './chari-proj-req-show/chari-proj-req-show.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ChariProjReqListComponent, ChariProjReqHomeComponent, ChariProjReqShowComponent],
  imports: [CommonModule, ChariProjReqRoutingModule, MatTableModule, MatCardModule],
  exports: [],
})
export class ChariProjReqModule {}
