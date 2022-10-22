import { Component, OnInit } from '@angular/core';
import CivilProjectDto from 'src/app/core/models/civil projects/civil-project-dto';
import { CivilProjectStatus } from 'src/app/core/models/civil projects/civil-project-status';
import { Icons } from 'src/app/core/models/civil projects/icons';
import { CivilProjectService } from 'src/app/core/services/civil-project.service';

@Component({
  selector: 'app-civic-project-panel',
  templateUrl: './civic-project-panel.component.html',
  styleUrls: ['./civic-project-panel.component.scss'],
})
export class CivicProjectPanelComponent implements OnInit {
  constructor(private civilProjectService: CivilProjectService) {}

  projects: CivilProjectDto[] = [];
  filteredProjects: CivilProjectDto[] = [];
  shouldFilterProjects: boolean = false;
  displayedColumns: string[] = ['name', 'description', 'cost'];

  selectedCity: string = '';
  cities: string[] = [];
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

  ngOnInit(): void {
    this.civilProjectService.getAllCivilProjects().subscribe((data) => {
      this.projects = data;
      this.filteredProjects = this.projects;
      const uniqueCities = [...new Set(data.map((p) => p.city))];
      this.cities = uniqueCities;
      this.cities.push('Dowolne');
      if (this.cities.length > 0) {
        this.selectedCity = this.cities[0];
      }
      this.filterProjects();
    });
  }

  onVerifyProject(title: string) {
    this.civilProjectService.verifyCivilProject(title).subscribe(() => {
      this.fetchCivilProjects();
      this.filterProjects();
      this.hideProject();
    });
  }
  onCheckboxChange() {
    this.filterProjects();
  }

  filterProjects() {
    this.filteredProjects = this.projects.filter((p) => {
      if (this.shouldFilterProjects) {
        return (
          (p.status as unknown as string) ==
            CivilProjectStatus[CivilProjectStatus.UNVERIFIED] &&
          (p.city == this.selectedCity || this.selectedCity == 'Dowolne')
        );
      } else {
        return p.city == this.selectedCity || this.selectedCity == 'Dowolne';
      }
    });
  }

  fetchCivilProjects() {
    this.civilProjectService.getAllCivilProjects().subscribe((data) => {
      this.projects = data;
      this.filterProjects();
    });
  }

  showProject(index: number) {
    this.currentProjectIndex = index;
  }

  getProjectIndex(project: CivilProjectDto) {
    return this.projects.indexOf(project);
  }

  isProjectVerified(project: CivilProjectDto) {
    if (
      project.status ==
      (CivilProjectStatus[
        CivilProjectStatus.VERIFIED
      ] as unknown as CivilProjectStatus)
    ) {
      return true;
    } else {
      return false;
    }
  }

  hideProject() {
    this.currentProjectIndex = null;
  }

  onCitySelectChange() {
    this.filterProjects();
  }

  formatCity(city: string): string {
    return city.charAt(0).toUpperCase() + city.toLowerCase().slice(1);
  }
  formatStatus(status: CivilProjectStatus): string {
    if (
      (status as unknown as string) ==
      CivilProjectStatus[CivilProjectStatus.VERIFIED]
    ) {
      return 'Zweryfikowany';
    } else {
      return 'Niezweryfikowany';
    }
  }
}
