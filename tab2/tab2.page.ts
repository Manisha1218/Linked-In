import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  connections = [
    {
      name: 'Himanshu Verma',
      jobTitle: 'Software Engineer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.LmnOQpSNzGat3ORi-Mb34gHaE8&pid=Api&P=0&h=180',
    },
    {
      name: 'Satish Kumar',
      jobTitle: 'Product Manager',
      avatar: 'https://tse3.mm.bing.net/th?id=OIP.0lm6pHEbf_7EsUH0cmVRRgHaJQ&pid=Api&P=0&h=180',
    },
    {
      name: 'Alice Johnson',
      jobTitle: 'UX Designer',
      avatar: 'https://tse3.mm.bing.net/th?id=OIP.D0IAsH_T_-CMlg7zArngewHaHa&pid=Api&P=0&h=180g',
    },
    {
      name: 'Alisha',
      jobTitle: 'UX Designer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIF.xhED72DOpi5EIQs0Ksek1g&pid=Api&P=0&h=180',
    },
    {
      name: 'Shreya Chaudhary',
      jobTitle: 'UX Designer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.sZ4wMoVgQYmItcIiNLceuQHaLH&pid=Api&P=0&h=180',
    },
    {
      name: 'Vanshu Kumar',
      jobTitle: 'UX Designer',
      avatar: 'https://tse1.mm.bing.net/th?id=OIF.QLAqGjP6U3cIvMCvAjaVMQ&pid=Api&P=0&h=180',
    },
    {
      name: 'Alice Johnson',
      jobTitle: 'UX Designer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.sZ4wMoVgQYmItcIiNLceuQHaLH&pid=Api&P=0&h=180',
    },
    {
      name: 'Alice Johnson',
      jobTitle: 'UX Designer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.sZ4wMoVgQYmItcIiNLceuQHaLH&pid=Api&P=0&h=180',
    },
    {
      name: 'Alice Johnson',
      jobTitle: 'UX Designer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.sZ4wMoVgQYmItcIiNLceuQHaLH&pid=Api&P=0&h=180',
    },
  ];
  constructor(private alertController: AlertController) {}

  // Method for presenting the alert
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'Connection successfully Added!',
      buttons: ['OK']
    });
    await alert.present();
  }

  // Method for presenting the Remove alert
  async presentRemoveAlert() {
    const alert = await this.alertController.create({
      header: 'Remove Connection',
      message: 'Are you sure you want to remove this connection?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Connection removed');
         
          }
        }
      ]
    });
    await alert.present();
  }

  // Method to trigger the alert
  triggerAlert() {
    this.presentAlert();
  }
}