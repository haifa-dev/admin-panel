import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProjReqDocNotFoundComponent } from './proj-req-doc-not-found/proj-req-doc-not-found.component';


@NgModule({
  declarations: [ProjReqDocNotFoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
