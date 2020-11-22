import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChariProjReqRoutingModule } from './chari-proj-req-routing.module';
import { ChariProjReqHomeComponent } from './chari-proj-req-home/chari-proj-req-home.component';
import { ChariProjReqDocComponent } from './chari-proj-req-doc/chari-proj-req-doc.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProjReqModule } from '../proj-req/proj-req.module';

@NgModule({
  declarations: [ChariProjReqHomeComponent, ChariProjReqDocComponent],
  imports: [CommonModule, ChariProjReqRoutingModule, MatProgressBarModule, ProjReqModule],
  exports: [ChariProjReqHomeComponent]
})
export class ChariProjReqModule {}
