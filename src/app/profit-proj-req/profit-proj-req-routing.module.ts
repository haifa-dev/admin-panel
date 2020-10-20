import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfitProjReqHomeComponent } from './profit-proj-req-home/profit-proj-req-home.component';
import { ProfitProjReqShowComponent } from './profit-proj-req-show/profit-proj-req-show.component';

const routes: Routes = [
  {
    path: '',
    component: ProfitProjReqHomeComponent,
    children: [{ path: ':id', component: ProfitProjReqShowComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfitProjReqRoutingModule {}
