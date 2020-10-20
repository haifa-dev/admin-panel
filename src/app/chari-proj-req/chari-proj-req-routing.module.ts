import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChariProjReqHomeComponent } from './chari-proj-req-home/chari-proj-req-home.component';
import { ChariProjReqShowComponent } from './chari-proj-req-show/chari-proj-req-show.component';

const routes: Routes = [
  {
    path: '',
    component: ChariProjReqHomeComponent,
    children: [
      {
        path: ':id',
        component: ChariProjReqShowComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChariProjReqRoutingModule {}
