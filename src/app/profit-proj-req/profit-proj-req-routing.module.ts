import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfitProjReqHomeComponent } from './profit-proj-req-home/profit-proj-req-home.component';

const routes: Routes = [
  { path: 'profitable-project-requests', component: ProfitProjReqHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfitProjReqRoutingModule {}
