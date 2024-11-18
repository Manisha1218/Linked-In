import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage {

  privacy: boolean = true;
  notifications: boolean = true;
  selectedLanguage: string = 'en';
  darkMode: boolean = false;
  selectedTheme: string = 'light';
  userEmail: string = '';
  userPassword: string = '';
accordionOpened: boolean = false;

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);  // Update route as necessary
  }

  toggleAccordion() {
    this.accordionOpened = !this.accordionOpened;
  }

  goToAbout() {
    this.router.navigate(['/about']);  // Update route as necessary
  }

  goToAccountSettings() {
    this.router.navigate(['/profile']);  // Update route as necessary
  }

  logOut() {
    console.log('User logged out');
    this.router.navigate(['/login']);  // Navigate to login page
  }

}
