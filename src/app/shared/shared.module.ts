import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProjReqItemComponent } from './proj-req-item/proj-req-item.component';

@NgModule({
  declarations: [ProjReqItemComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ProjReqItemComponent],
})
export class SharedModule {}
