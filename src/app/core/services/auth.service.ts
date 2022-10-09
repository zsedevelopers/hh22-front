import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import LoginRequest from '../models/login-request';
import LoginResponse from '../models/login-response';
import RegisterRequest from '../models/register-request';
import UserDto from '../models/user-dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private router: Router) {}

  login(requestData: LoginRequest) {
    this.apiService.login(requestData).subscribe((res:LoginResponse) => {
      console.log(`logged in as ${res.user.name}`);
    });
  }
  register(requestData: RegisterRequest) {
    this.apiService.register(requestData).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/auth/login']);
    });
  }
}
