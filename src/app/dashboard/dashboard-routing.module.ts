import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'charitable',
        loadChildren: () =>
          import('../chari-proj-req/chari-proj-req.module').then(m => m.ChariProjReqModule)
      },
      {
        path: 'profitable',
        loadChildren: () =>
          import('../profit-proj-req/profit-proj-req.module').then(mod => mod.ProfitProjReqModule)
      },
      {
        path: 'accounts',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
