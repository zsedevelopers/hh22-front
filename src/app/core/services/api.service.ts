import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import LoginRequest from '../models/auth/login-request';
import RegisterRequest from '../models/auth/register-request';
import LoginResponse from '../models/auth/login-response';
import AddCivilProjectRequest from '../models/civil projects/add-civil-project-request';
import { Observable } from 'rxjs';
import CivilProjectDto from '../models/civil projects/civil-project-dto';
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
    return this.http.get(`${this.baseUrl}/api/v1/user/token/refresh`);
  }
  //#endregion

<<<<<<< HEAD
  addCivilProject(data: AddCivilProjectRequest, token: string) {
    return this.http.post(`${this.baseUrl}/api/v1/civicproject`, data, {
=======
  addCivilProject(data: AddCivilProjectRequest, token: string):Observable<HttpResponse<null>> {
    return this.http.post<HttpResponse<null>>(`${this.baseUrl}/api/v1/civicproject`, data, {
>>>>>>> 5b231273448ead6e3f087687639566e764eccac6
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

<<<<<<< HEAD
  getCivilProjectsByCity(city: string, token: string) {
    return this.http.get(`${this.baseUrl}/api/v1/civicproject/city/${city}`, {
=======
  getAllCivilProjects(token: string):Observable<CivilProjectDto[]> {
    return this.http.get<CivilProjectDto[]>(`${this.baseUrl}/api/v1/civicproject`, {
>>>>>>> 5b231273448ead6e3f087687639566e764eccac6
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getCivilProjectsByCity(
    city: string,
    token: string
  ): Observable<CivilProjectDto[]> {
    return this.http.get<CivilProjectDto[]>(
      `${this.baseUrl}/api/v1/civicproject/city/${city}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getCivilProjectByTitle(title: string, token: string):Observable<CivilProjectDto> {
    return this.http.get<CivilProjectDto>(`${this.baseUrl}/api/v1/civicproject/title/${title}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  likeCivilProject(title: string, token: string) {
    return this.http.post(
      `${this.baseUrl}/api/v1/civicproject/favourite/title/${title}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  verifyCivilProject(title: string, token: string) {
    return this.http.post(
      `${this.baseUrl}/api/v1/civicproject/management/verify/${title}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
