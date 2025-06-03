import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  login(data: LoginData) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data);
  }

  register(data: RegisterData) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/register`, data);
  }
}
