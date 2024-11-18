import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'user@gmail.com' && this.password === 'password123') {
      
      this.router.navigate(['/tabs/tab1']); 
    } else {
    
      alert('Incorrect email or password');
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']); 
  }

}
