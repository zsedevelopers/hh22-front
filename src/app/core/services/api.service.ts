import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import LoginRequest from '../models/auth/login-request';
import RegisterRequest from '../models/auth/register-request';
import LoginResponse from '../models/auth/login-response';
import AddCivilProjectRequest from '../models/civil projects/add-civil-project-request';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  //#region Auth
  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/api/v1/user`, data);
  }

  register(data: RegisterRequest) {
    return this.http.post(`${this.baseUrl}/api/user/new`, data);
  }

  getRefreshToken(){
    return this.http.get(`${this.baseUrl}/api/v1/user/token/refresh`);
  }
  //#endregion

  addCivilProject(data: AddCivilProjectRequest) {
    return this.http.post(`${this.baseUrl}/api/v1/civilproject`, data);
  }

  getCivilProjectsByCity(city: string) {
    return this.http.get(`${this.baseUrl}/api/v1/civilproject/city/${city}`);
  }

  getCivilProjectByTitle(title: string) {
    return this.http.get(`${this.baseUrl}/api/v1/civilproject/title/${title}`);
  }

  likeCivilProject(title: string) {
    return this.http.post(
      `${this.baseUrl}/api/v1/civilproject/favourite/title/${title}`,
      {}
    );
  }
}
