import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitProjReqRoutingModule } from './profit-proj-req-routing.module';
import { ProfitProjReqHomeComponent } from './profit-proj-req-home/profit-proj-req-home.component';
import { ProfitProjReqDocComponent } from './profit-proj-req-doc/profit-proj-req-doc.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjReqModule } from '../proj-req/proj-req.module';
import { ProjReqIndicationsComponent } from './proj-req-indications/proj-req-indications.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ProfitProjReqHomeComponent,
    ProfitProjReqDocComponent,
    ProjReqIndicationsComponent
  ],
  imports: [
    CommonModule,
    ProfitProjReqRoutingModule,
    MatIconModule,
    ProjReqModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class ProfitProjReqModule {}
