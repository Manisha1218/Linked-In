// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-notification',
//   templateUrl: './notification.page.html',
//   styleUrls: ['./notification.page.scss'],
// })
// export class NotificationPage {
//   notifications = [
//     {
//       name: 'Pavanansh Peala',
//       avatar: 'https://example.com/avatar1.png',
//       action: 'shared a post:',
//       content: 'Just wrapped up an exciting machine learning project...',
//       time: '2h',
//       buttonText: 'View post'
//     },
//     {
//       name: 'Internworld and 8 others',
//       avatar: 'https://example.com/avatar2.png',
//       action: '',
//       content: 'We found jobs that you may be interested in',
//       time: '4h',
//       buttonText: 'View jobs'
//     },
//     {
//       name: 'Sai Ram',
//       avatar: 'https://example.com/avatar3.png',
//       action: 'shared about starting a new position as Category Manager at',
//       content: 'Board Infinity...',
//       time: '4h',
//       buttonText: 'View profile'
//     },
//     {
//       name: '',
//       avatar: 'https://example.com/magnifying-glass.png',
//       action: 'We found',
//       content: '40 new jobs for your search: software engineer',
//       time: '5h',
//       buttonText: 'View jobs'
//     },
    
//   ];
// connection: any;

//   handleButtonClick(notification: any) {
//     console.log('Button clicked for:', notification);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage {
  searchQuery: string = '';
  notifications = [
    {
      name: 'Pavanansh Peala',
      avatar: 'https://tse1.mm.bing.net/th?id=OIF.QLAqGjP6U3cIvMCvAjaVMQ&pid=Api&P=0&h=180',
      action: 'shared a post:',
      content: 'Just wrapped up an exciting machine learning project...',
      time: '2h',
      buttonText: 'View Jobs',
      route: '/view-jobs' 
    },
    {
      name: 'Internworld and 8 others',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.sZ4wMoVgQYmItcIiNLceuQHaLH&pid=Api&P=0&h=180',
      action: '',
      content: 'We found jobs that you may be interested in',
      time: '4h',
      buttonText: 'View jobs',
      route: '/view-jobs'  
    },
    {
      name: 'Sai Ram',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.LmnOQpSNzGat3ORi-Mb34gHaE8&pid=Api&P=0&h=180',
      action: 'shared about starting a new position as Category Manager at',
      content: 'Board Infinity...',
      time: '4h',
      buttonText: 'View jobs',
      route: '/view-jobs' 
    },
    {
      name: '',
      avatar: 'https://tse3.mm.bing.net/th?id=OIP.D0IAsH_T_-CMlg7zArngewHaHa&pid=Api&P=0&h=180g',
      action: 'We found',
      content: '40 new jobs for your search: software engineer',
      time: '5h',
      buttonText: 'View jobs',
      route: '/view-jobs'
    },
    
  ];
  static buttonText: string;

  constructor(private router: Router) {}

  handleButtonClick(route: string) {
    this.router.navigate([route]);
  }
  goToSettings() {
    this.router.navigate(['/setting']);
  }
}


