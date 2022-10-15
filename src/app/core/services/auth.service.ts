import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import LoginRequest from '../models/auth/login-request';
import LoginResponse from '../models/auth/login-response';
import RegisterRequest from '../models/auth/register-request';
import UserDto from '../models/common/user-dto';
import { ApiService } from './api.service';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: UserDto | null = null;

  constructor(private apiService: ApiService, private router: Router) {
    if (this.getJwt() != null) {
      if (this.isJwtExpired()) {
        this.logout();
      } else {
        if (this.userData == null) {
          this.getUserData().subscribe((data: UserDto) => {
            this.userData = data;
          });
        }
      }
    }
  }

  login(requestData: LoginRequest) {
    return this.apiService
      .login(requestData)
      .subscribe((res: LoginResponse) => {
        this.setJwt(res.access_token);
        this.userData = res.user;
        console.log(`zalogowano jako:`);
        console.log(this.userData);
        this.router.navigate(['/']);
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
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    if (
      this.getJwt() != null &&
      this.userData != null &&
      !this.isJwtExpired()
    ) {
      return true;
    } else {
      if (this.getJwt() != null) {
        this.logout();
      }
      return false;
    }
  }

  getUserData(): Observable<UserDto> {
    return this.apiService.getUserData(this.getJwt()!);
  }

  //#region Jwt
  private setJwt(token: string) {
    localStorage.setItem('jwt', token);
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

  isJwtExpired(): boolean {
    const jwt = this.getJwt();

    const decoded: any = jwtDecode(jwt!);
    let expirationDate = new Date(Date.UTC(1970, 0, 1));
    expirationDate.setSeconds(decoded.exp);

    if (expirationDate < new Date(Date.now())) {
      return true;
    }
    return false;
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
