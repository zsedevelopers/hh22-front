import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import CivilProjectDto from '../../../core/models/civil projects/civil-project-dto';
import { CivilProjectService } from '../../../core/services/civil-project.service';

@Component({
  selector: 'app-show-civic-projects',
  templateUrl: './show-civic-projects.component.html',
  styleUrls: ['./show-civic-projects.component.scss'],
})
export class ShowCivicProjectsComponent implements OnInit {
  constructor(
    private civilProjectService: CivilProjectService,
    fb: FormBuilder
  ) {}

  selectedCity: string = '';
  cities: string[] = ['OLSZTYN', 'RADOM', 'SOSNOWIEC'];
  projects: CivilProjectDto[] = [];

  onCitySelectChange() {
    this.loadProjects(this.selectedCity)
  }

  loadProjects(city: string) {
    this.civilProjectService
      .getCivilProjectsByCity(city)
      .subscribe((data) => (this.projects = data));
  }

  ngOnInit(): void {
    this.selectedCity = this.cities[0];
    this.loadProjects(this.selectedCity)
  }
}
