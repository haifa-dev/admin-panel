import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitProjReqRoutingModule } from './profit-proj-req-routing.module';
import { ProfitProjReqHomeComponent } from './profit-proj-req-home/profit-proj-req-home.component';
import { ProfitProjReqShowComponent } from './profit-proj-req-show/profit-proj-req-show.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProfitProjReqHomeComponent, ProfitProjReqShowComponent],
  imports: [CommonModule, ProfitProjReqRoutingModule, SharedModule, MatIconModule],
})
export class ProfitProjReqModule {}
