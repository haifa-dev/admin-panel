import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChariProjReqDocComponent } from './chari-proj-req-doc/chari-proj-req-doc.component';
import { ChariProjReqHomeComponent } from './chari-proj-req-home/chari-proj-req-home.component';

const routes: Routes = [
  {
    path: '',
    component: ChariProjReqHomeComponent,
    children: [
      {
        path: ':id',
        component: ChariProjReqDocComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChariProjReqRoutingModule {}
