import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'my-jobs',
    loadChildren: () => import('./pages/my-jobs/my-jobs.module').then( m => m.MyJobsPageModule)
  },
  {
    path: 'saved-jobs',
    loadChildren: () => import('./pages/saved-jobs/saved-jobs.module').then( m => m.SavedJobsPageModule)
  },
  {
    path: 'job-alerts',
    loadChildren: () => import('./pages/job-alerts/job-alerts.module').then( m => m.JobAlertsPageModule)
  },
  // {
  //   path: 'setting',
  //   loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  // },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'view-jobs',
    loadChildren: () => import('./view-jobs/view-jobs.module').then( m => m.ViewJobsPageModule)
  },
  {
    path: 'post-jobs',
    loadChildren: () => import('./post-jobs/post-jobs.module').then( m => m.PostJobsPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  // {
  //   path: 'jobs',
  //   loadChildren: () => import('./job/job.module').then( m => m.JobPageModule)
  // },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
