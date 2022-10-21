import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import CivilProjectDto from '../../../core/models/civil projects/civil-project-dto';
import { ProjectCategory } from '../../../core/models/civil projects/project-category';
import { Icons } from '../../../core/models/civil projects/icons';
import { CivilProjectService } from '../../../core/services/civil-project.service';

@Component({
  selector: 'app-show-civic-projects',
  templateUrl: './show-civic-projects.component.html',
  styleUrls: ['./show-civic-projects.component.scss'],
})
export class ShowCivicProjectsComponent implements OnInit {
  constructor(
    private civilProjectService: CivilProjectService,
    fb: FormBuilder,
    private authService: AuthService
  ) {}

  icons = {
    SPORT: Icons.SPORT,
    EDUCATION: Icons.EDUCATION,
    CULTURE: Icons.CULTURE,
    HEALTH: Icons.HEALTH,
    ENVIRONMENT: Icons.ENVIRONMENT,
    INFRASTRUCTURE: Icons.INFRASTRUCTURE,
    NATURE: Icons.NATURE,
    COMMUNITY: Icons.COMMUNITY,
    OTHER: Icons.OTHER,
  };

  currentProjectIndex: number | null = null;

  showProject(index: number) {
    this.currentProjectIndex = index;
  }

  hideProject() {
    this.currentProjectIndex = null;
  }

  displayedColumns: string[] = ['name', 'description', 'cost'];

  selectedCity: string = '';
  cities: string[] = ['OLSZTYN', 'RADOM', 'SOSNOWIEC'];
  projects: CivilProjectDto[] = [];

  onCitySelectChange() {
    this.loadProjects(this.selectedCity);
  }

  // likeProject(title:string){
  //   if (!this.authService.isLogged()) {
  //     return;
  //   }
  //   this.civilProjectService.likeCivilProject(title)
  // }

  loadProjects(city: string) {
    if (!this.authService.isLogged()) {
      return;
    }
    this.civilProjectService
      .getCivilProjectsByCity(city)
      .subscribe((data) => (this.projects = data));
  }

  ngOnInit(): void {
    this.selectedCity = this.cities[0];
    this.loadProjects(this.selectedCity);
    this.civilProjectService.getAllCivilProjects().subscribe((data) => {
      const uniqueCities = [...new Set(data.map((p) => p.city))];
      this.cities = uniqueCities;
      if (this.cities.length > 0) {
        this.selectedCity = this.cities[0];
        this.loadProjects(this.selectedCity);
      }
    });
  }
}
