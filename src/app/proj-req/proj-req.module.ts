import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjReqRoutingModule } from './proj-req-routing.module';
import { ProjReqItemComponent } from './proj-req-item/proj-req-item.component';
import { MatRippleModule } from '@angular/material/core';
import { ProjReqDocNotFoundComponent } from './proj-req-doc-not-found/proj-req-doc-not-found.component';
import { LoadingDocComponent } from './loading-doc/loading-doc.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProjReqHeaderComponent } from './proj-req-header/proj-req-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProjReqSectionComponent } from './proj-req-section/proj-req-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProjReqAttachmentsComponent } from './proj-req-attachments/proj-req-attachments.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProjReqItemComponent,
    ProjReqDocNotFoundComponent,
    LoadingDocComponent,
    ProjReqHeaderComponent,
    ProjReqSectionComponent,
    ProjReqAttachmentsComponent
  ],
  imports: [
    CommonModule,
    ProjReqRoutingModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    ProjReqItemComponent,
    ProjReqDocNotFoundComponent,
    LoadingDocComponent,
    ProjReqHeaderComponent,
    ProjReqSectionComponent,
    ProjReqAttachmentsComponent
  ]
})
export class ProjReqModule {}
