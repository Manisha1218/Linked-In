import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobAlertsPageRoutingModule } from './job-alerts-routing.module';

import { JobAlertsPage } from './job-alerts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobAlertsPageRoutingModule
  ],
  declarations: [JobAlertsPage]
})
export class JobAlertsPageModule {}
