import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import AddCivilProjectRequest from 'src/app/core/models/civil projects/add-civil-project-request';
import { AuthService } from './auth.service';
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import CivilProjectDto from "../models/civil projects/civil-project-dto";
@Injectable({
  providedIn: 'root',
})
export class CivilProjectService {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  addCivilProject(data: AddCivilProjectRequest):Observable<Object> {
    return this.apiService.addCivilProject(data, this.authService.getJwt()!);
  }

  getCivilProjectsByCity(city: string) {
    console.log('szczur')
    return this.apiService.getCivilProjectsByCity(
      city,
      this.authService.getJwt()!
    );
  }

  getCivilProjectByTitle(title: string) {
    return this.apiService.getCivilProjectByTitle(
      title,
      this.authService.getJwt()!
    );
  }

  likeCivilProject(title: string) {
    return this.apiService.likeCivilProject(title, this.authService.getJwt()!);
  }
}
