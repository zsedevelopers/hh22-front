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
}
