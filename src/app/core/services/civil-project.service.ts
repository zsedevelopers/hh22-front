import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import AddCivilProjectRequest from 'src/app/core/models/civil projects/add-civil-project-request';
@Injectable({
  providedIn: 'root',
})
export class CivilProjectService {
  constructor(private apiService: ApiService) {}

  addCivilProject(data: AddCivilProjectRequest) {
    return this.apiService.addCivilProject(data);
  }

  getCivilProjectsByCity(city: string) {
    return this.apiService.getCivilProjectsByCity(city);
  }

  getCivilProjectByTitle(title: string) {
    return this.apiService.getCivilProjectByTitle(title);
  }

  likeCivilProject(title: string) {
    return this.apiService.likeCivilProject(title);
  }
}
