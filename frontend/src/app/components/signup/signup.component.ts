import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: any; // Remove initializer
  errorMessage?: string;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Initialize form in constructor
    this.signupForm = this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: any) {
    return form.get('password').value === form.get('confirmPassword').value ?
      null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.register(this.signupForm.getRawValue()).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Registration failed';
        }
      });
    }
  }
}
  