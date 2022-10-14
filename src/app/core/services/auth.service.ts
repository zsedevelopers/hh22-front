import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import LoginRequest from '../models/auth/login-request';
import LoginResponse from '../models/auth/login-response';
import RegisterRequest from '../models/auth/register-request';
import UserDto from '../models/common/user-dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: UserDto | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  login(requestData: LoginRequest) {
    this.apiService.login(requestData).subscribe((res: LoginResponse) => {
      this.setJwt(res.access_token);
      this.userData = res.user;
      console.log(`user data: `);
      console.log(this.userData)
    });
  }

  register(requestData: RegisterRequest) {
    this.apiService.register(requestData).subscribe((res) => {
      this.router.navigate(['/auth/login']);
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/'])
  }

  isLogged(): boolean {
    if (this.getJwt() != null && this.userData != null) {
      return true;
    } else {
      if(this.getJwt() != null){
        this.logout();
      }
      return false;
    }
  }

  //#region Jwt
  private setJwt(token: string) {
    localStorage.setItem('jwt', token);
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }
  //#endregion

  //#region Refresh token
  private setRefreshToken(token: string) {
    localStorage.setItem('refreshToken', token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }
  //#endregion
}
