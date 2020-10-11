import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'profitable',
        loadChildren: () =>
          import('../profit-proj-req/profit-proj-req.module').then(m => m.ProfitProjReqModule),
      },
      {
        path: 'charitable',
        loadChildren: () =>
          import('../chari-proj-req/chari-proj-req.module').then(m => m.ChariProjReqModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
