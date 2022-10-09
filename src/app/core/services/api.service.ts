import { Injectable } from '@angular/core';
import LoginRequest from '../models/login-request';
import { HttpClient } from '@angular/common/http';
import RegisterRequest from '../models/register-request';
import LoginResponse from '../models/login-response';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/api/user/login`, data);
  }

  register(data:RegisterRequest){
    return this.http.post(`${this.baseUrl}/api/user/register`, data)
  }
}
