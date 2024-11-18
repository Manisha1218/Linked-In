import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyJobsPageRoutingModule } from './my-jobs-routing.module';

import { MyJobsPage } from './my-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyJobsPageRoutingModule
  ],
  declarations: [MyJobsPage]
})
export class MyJobsPageModule {}
