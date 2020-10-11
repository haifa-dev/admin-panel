import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitProjReqRoutingModule } from './profit-proj-req-routing.module';
import { ProfitProjReqHomeComponent } from './profit-proj-req-home/profit-proj-req-home.component';
import { ProfitProjReqShowComponent } from './profit-proj-req-show/profit-proj-req-show.component';
import { ProfitProjReqListComponent } from './profit-proj-req-list/profit-proj-req-list.component';


@NgModule({
  declarations: [ProfitProjReqHomeComponent, ProfitProjReqShowComponent, ProfitProjReqListComponent],
  imports: [
    CommonModule,
    ProfitProjReqRoutingModule
  ]
})
export class ProfitProjReqModule { }
