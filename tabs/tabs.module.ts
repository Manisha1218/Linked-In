import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NotificationPageModule } from '../notification/notification.module';
// import { JobsPageRoutingModule } from '../jobs/jobs-routing.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NotificationPageModule
    // JobsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';  // Import IonicModule here
// import { TabsPage } from './tabs.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule  // Include IonicModule here
//   ],
//   declarations: [TabsPage]
// })
// export class TabsPageModule {}
