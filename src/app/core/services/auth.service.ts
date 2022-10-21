import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import LoginRequest from '../models/auth/login-request';
import LoginResponse from '../models/auth/login-response';
import RegisterRequest from '../models/auth/register-request';
import UserDto from '../models/common/user-dto';
import { ApiService } from './api.service';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private router: Router) {
    console.log('jwt:');
    console.log(this.getJwt());
    console.log(this.isLogged());
    if (this.isLogged()) {
      this.getUserData().subscribe({
        next: (data) => {
          if (data == null) {
            this.logout();
          }
        },
        error: (error) => {
          this.logout();
        },
      });
    }
    // if (this.getJwt() != null) {
    //   console.log('a');
    //   if (this.isJwtExpired()) {
    //     this.logout();
    //   } else {
    //     console.log('b');
    //     // if (this.userData == null) {
    //     //   console.log('c');

    //     //   this.getUserData().subscribe((data: UserDto) => {
    //     //     this.userData = data;
    //     //     console.log('user data 2:')
    //     //     console.log(this.userData)
    //     //   });
    //     // }
    //   }
    // }
  }

  login(requestData: LoginRequest) {
    return this.apiService
      .login(requestData).pipe(tap((res) => {
        this.setJwt(res.access_token);
          this.router.navigate(['/']);
      }))
      // .pipe((res: LoginResponse) => {
      //   this.setJwt(res.access_token);
      //   this.router.navigate(['/']);
      // });
  }

  register(requestData: RegisterRequest) {
    this.apiService.register(requestData).subscribe((res) => {
      this.router.navigate(['/auth/login']);
    });
  }

  registerAdmin(requestData: RegisterRequest) {
    return this.apiService.registerAdmin(requestData, this.getJwt()!);
  }

  logout() {
    console.log('logged out');
    localStorage.removeItem('jwt');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    if (this.getJwt() != null && !this.isJwtExpired()) {
      return true;
    } else {
      return false;
    }
  }

  getUserData() {
    return this.apiService.getUserData(this.getJwt()!).pipe(
      catchError((err) => {
        this.logout();
        alert('you have to be logged in to access this feature')
        return throwError(err);
      })
    );
  }

  //#region Jwt
  private setJwt(token: string) {
    localStorage.setItem('jwt', token);
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

  isJwtExpired(): boolean {
    return false;
    // const jwt = this.getJwt();
    // const decoded: any = jwtDecode(jwt!);
    // let expirationDate = new Date(Date.UTC(1970, 0, 1));
    // expirationDate.setSeconds(decoded.exp);
    // if (expirationDate < new Date(Date.now())) {
    //   return true;
    // }
    // return false;
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
