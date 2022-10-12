import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import LoginRequest from '../models/auth/login-request';
import RegisterRequest from '../models/auth/register-request';
import LoginResponse from '../models/auth/login-response';
import AddCivilProjectRequest from '../models/civil projects/add-civil-project-request';
import {Observable} from "rxjs";
import CivilProjectDto from "../models/civil projects/civil-project-dto";
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
    return this.http.post(`${this.baseUrl}/api/v1/user/new`, data);
  }

  getRefreshToken() {
    return this.http.get(`${this.baseUrl}/api/user/token/refresh`);
  }
  //#endregion

  addCivilProject(data: AddCivilProjectRequest, token: string) {
    return this.http.post(`${this.baseUrl}/api/v1/civilproject`, data, {
      headers: {
        Authorization: token,
      },
    });
  }

  getCivilProjectsByCity(city: string, token: string):Observable<CivilProjectDto> {
    return this.http.get<CivilProjectDto>(`${this.baseUrl}/api/v1/civilproject/city/${city}`, {
      headers: {
        Authorization: token,
      },
    });
  }

  getCivilProjectByTitle(title: string, token: string) {
    return this.http.get(`${this.baseUrl}/api/v1/civilproject/title/${title}`, {
      headers: {
        Authorization: token,
      },
    });
  }

  likeCivilProject(title: string, token: string) {
    return this.http.post(
      `${this.baseUrl}/api/v1/civilproject/favourite/title/${title}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}
