import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedRoutingModule } from './shared-routing.module';
import { ProjReqItemComponent } from './proj-req-item/proj-req-item.component';
import { LinkPanelComponent } from './link-panel/link-panel.component';
import { SectionComponent } from './section/section.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProjReqHeaderComponent } from './proj-req-header/proj-req-header.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProjReqNotFoundComponent } from './proj-req-not-found/proj-req-not-found.component';
import { AttachmentsSectionComponent } from './attachments-section/attachments-section.component';
import { IndicationsSectionComponent } from './indications-section/indications-section.component';
import { DocumentHeaderComponent } from './document-header/document-header.component';

@NgModule({
  declarations: [
    ProjReqItemComponent,
    LinkPanelComponent,
    SectionComponent,
    ProjReqHeaderComponent,
    SpinnerComponent,
    ProjReqNotFoundComponent,
    AttachmentsSectionComponent,
    IndicationsSectionComponent,
    DocumentHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    ProjReqItemComponent,
    LinkPanelComponent,
    SectionComponent,
    ProjReqHeaderComponent,
    SpinnerComponent,
    ProjReqNotFoundComponent,
    AttachmentsSectionComponent,
    IndicationsSectionComponent,
    DocumentHeaderComponent
  ]
})
export class SharedModule {}
