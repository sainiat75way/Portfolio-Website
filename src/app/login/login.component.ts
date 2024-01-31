// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(username: string, password: string) {
    // Check if the provided username and password are correct
    if (username === 'pegoutam.75way@gmail.com' && password === '12345') {
      console.log('Login successful');
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid username or password');
      this.errorMessage = 'Invalid username or password';
    }
  }
}
