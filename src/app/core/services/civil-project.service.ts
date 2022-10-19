import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import AddCivilProjectRequest from 'src/app/core/models/civil projects/add-civil-project-request';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import CivilProjectDto from '../models/civil projects/civil-project-dto';
@Injectable({
  providedIn: 'root',
})
export class CivilProjectService {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  addCivilProject(
    data: AddCivilProjectRequest
  ): Observable<HttpResponse<null>> {
    console.log('nietoperz');
    return this.apiService.addCivilProject(data, this.authService.getJwt()!);
  }
  getAllCivilProjects(): Observable<CivilProjectDto[]> {
    return this.apiService.getAllCivilProjects(this.authService.getJwt()!);
  }

  getCivilProjectsByCity(city: string): Observable<CivilProjectDto[]> {
    console.log('szczur');
    return this.apiService.getCivilProjectsByCity(
      city,
      this.authService.getJwt()!
    );
  }

  getCivilProjectByTitle(title: string): Observable<CivilProjectDto> {
    return this.apiService.getCivilProjectByTitle(
      title,
      this.authService.getJwt()!
    );
  }

  likeCivilProject(title: string) {
    return this.apiService.likeCivilProject(title, this.authService.getJwt()!);
  }

  verifyCivilProject(title: string) {
    return this.apiService.verifyCivilProject(title, this.authService.getJwt()!);
  }
}
