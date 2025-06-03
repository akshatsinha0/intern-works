import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, LoginComponent, SignupComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  activeTab: 'login' | 'signup' = 'login';

  constructor(private router: Router) {}

  switchTab(tab: 'login' | 'signup') {
    this.activeTab = tab;
  }

  // Add social login method
  socialLogin(provider: string) {
    window.location.href = `/api/auth/${provider}`;
  }
}
