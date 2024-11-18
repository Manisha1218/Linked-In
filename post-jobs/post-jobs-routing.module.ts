import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostJobsPage } from './post-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: PostJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostJobsPageRoutingModule {}
