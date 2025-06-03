import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any; // Remove initializer
  errorMessage?: string;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Initialize form in constructor
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Login failed';
        }
      });
    }
  }
}
