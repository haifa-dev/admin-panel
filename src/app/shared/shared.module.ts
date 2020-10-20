import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProjReqItemComponent } from './proj-req-item/proj-req-item.component';
import { LinkPanelComponent } from './link-panel/link-panel.component';
import { SectionComponent } from './section/section.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProjReqHeaderComponent } from './proj-req-header/proj-req-header.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProjReqItemComponent,
    LinkPanelComponent,
    SectionComponent,
    ProjReqHeaderComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, MatDividerModule, MatIconModule],
  exports: [ProjReqItemComponent, LinkPanelComponent, SectionComponent, ProjReqHeaderComponent],
})
export class SharedModule {}
