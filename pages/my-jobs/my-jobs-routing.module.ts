import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyJobsPage } from './my-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: MyJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyJobsPageRoutingModule {}
