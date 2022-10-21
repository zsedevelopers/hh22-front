import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import LoginRequest from '../models/auth/login-request';
import RegisterRequest from '../models/auth/register-request';
import LoginResponse from '../models/auth/login-response';
import AddCivilProjectRequest from '../models/civil projects/add-civil-project-request';
import { Observable } from 'rxjs';
import CivilProjectDto from '../models/civil projects/civil-project-dto';
import UserDto from '../models/common/user-dto';
import CreateIdentityCardDto from '../models/digital documents/create-identity-card-dto';
import CreatePassportDto from '../models/digital documents/create-passport-dto';
import WalletDto from '../models/digital documents/wallet-dto';
import { Sex } from '../models/digital documents/enums/sex';
import CreateDriverLicenceDto from '../models/digital documents/create-driver-licence-dto';
import DocumentEntityDto from '../models/digital documents/document-entity-dto';
import { DriverLicenceType } from '../models/digital documents/enums/driver-licence-type';
import VerifyDocumentDto from '../models/digital documents/verifyDocumentDto';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = '';
  constructor(private http: HttpClient) {}

  //#region Auth
  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/api/v1/user`, data);
  }

  register(data: RegisterRequest) {
    return this.http.post(`${this.baseUrl}/api/v1/user/new`, data);
  }

  registerAdmin(data: RegisterRequest, token: string) {
    return this.http.post(`${this.baseUrl}/api/v1/user/new/admin`, data);
  }

  getRefreshToken() {
    return this.http.get(`${this.baseUrl}/api/v1/user/token/refresh`);
  }

  getUserData(token: string): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.baseUrl}/api/v1/user/info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  //#endregion

  //#region Civil Projects
  addCivilProject(
    data: AddCivilProjectRequest,
    token: string
  ): Observable<HttpResponse<null>> {
    return this.http.post<HttpResponse<null>>(
      `${this.baseUrl}/api/v1/civicproject`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getAllCivilProjects(): Observable<CivilProjectDto[]> {
    return this.http.get<CivilProjectDto[]>(
      `${this.baseUrl}/api/v1/civicproject`
    );
  }

  getCivilProjectsByCity(city: string): Observable<CivilProjectDto[]> {
    return this.http.get<CivilProjectDto[]>(
      `${this.baseUrl}/api/v1/civicproject/city/${city}`
    );
  }

  getCivilProjectByTitle(
    title: string,
    token: string
  ): Observable<CivilProjectDto> {
    return this.http.get<CivilProjectDto>(
      `${this.baseUrl}/api/v1/civicproject/title/${title}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
  //#endregion

  //#region Digital Documents
  createWallet(token: string): Observable<HttpResponse<null>> {
    return this.http.post<HttpResponse<null>>(
      `${this.baseUrl}/api/v1/wallet/new`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  addIdentityCard(
    data: CreateIdentityCardDto,
    token: string
  ): Observable<HttpResponse<null>> {
    return this.http.post<HttpResponse<null>>(
      `${this.baseUrl}/api/v1/document/identity-card`,
      { ...data, sex: Sex[data.sex] },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  addPassport(
    data: CreatePassportDto,
    token: string
  ): Observable<HttpResponse<null>> {
    return this.http.post<HttpResponse<null>>(
      `${this.baseUrl}/api/v1/document/passport`,
      { ...data, sex: Sex[data.sex] },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  addDriverLicence(
    data: CreateDriverLicenceDto,
    token: string
  ): Observable<HttpResponse<null>> {
    let parsedData: any = data;
    console.log(data);
    parsedData.permissions.map((p: any) => {
      return p.driverLicenceType as string;
    });
    console.log(parsedData);
    return this.http.post<HttpResponse<null>>(
      `${this.baseUrl}/api/v1/document/driver-licence`,
      parsedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getWallet(token: string): Observable<WalletDto> {
    return this.http.get<WalletDto>(`${this.baseUrl}/api/v1/wallet`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  verifyDocument(
    data: VerifyDocumentDto,
    token: string
  ): Observable<HttpResponse<null>> {
    return this.http.patch<HttpResponse<null>>(
      `${this.baseUrl}/api/v1/wallet/verification`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getUnverifiedDocuments(token: string): Observable<DocumentEntityDto[]> {
    return this.http.get<DocumentEntityDto[]>(
      `${this.baseUrl}/api/v1/documents/unverified`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  getVerifiedDocuments(token: string): Observable<DocumentEntityDto[]> {
    return this.http.get<DocumentEntityDto[]>(
      `${this.baseUrl}/api/v1/documents/verified`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  //#endregion
}
