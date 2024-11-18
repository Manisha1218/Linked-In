import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewJobsPage } from './view-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewJobsPageRoutingModule {}
