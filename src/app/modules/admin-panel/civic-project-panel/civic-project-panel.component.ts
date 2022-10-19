import { Component, OnInit } from '@angular/core';
import CivilProjectDto from 'src/app/core/models/civil projects/civil-project-dto';
import { CivilProjectStatus } from 'src/app/core/models/civil projects/civil-project-status';
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
  ngOnInit(): void {
    this.civilProjectService.getAllCivilProjects().subscribe((data) => {
      this.projects = data;
      this.filteredProjects = this.projects;
    });
  }

  onVerifyProject(title: string) {
    this.civilProjectService.verifyCivilProject(title).subscribe(() => {
      this.fetchCivilProjects();
      this.filterProjects();
    });
  }
  onCheckboxChange() {
    this.filterProjects();
  }

  filterProjects() {
    if (this.shouldFilterProjects) {
      this.filteredProjects = this.projects.filter(
        (p) =>
          (p.status as unknown as string) ==
          CivilProjectStatus[CivilProjectStatus.UNVERIFIED]
      );
    } else {
      this.filteredProjects = this.projects;
    }
  }

  fetchCivilProjects() {
    this.civilProjectService.getAllCivilProjects().subscribe((data) => {
      this.projects = data;
      this.filterProjects();
    });
  }
}
