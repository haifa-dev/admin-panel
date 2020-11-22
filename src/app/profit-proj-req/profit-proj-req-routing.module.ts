import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfitProjReqDocComponent } from './profit-proj-req-doc/profit-proj-req-doc.component';
import { ProfitProjReqHomeComponent } from './profit-proj-req-home/profit-proj-req-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProfitProjReqHomeComponent,
    children: [{ path: ':id', component: ProfitProjReqDocComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitProjReqRoutingModule {}
