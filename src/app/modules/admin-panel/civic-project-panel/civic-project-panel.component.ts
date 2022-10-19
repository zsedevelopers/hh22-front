import { Component, OnInit } from '@angular/core';
import CivilProjectDto from 'src/app/core/models/civil projects/civil-project-dto';
import { CivilProjectService } from 'src/app/core/services/civil-project.service';

@Component({
  selector: 'app-civic-project-panel',
  templateUrl: './civic-project-panel.component.html',
  styleUrls: ['./civic-project-panel.component.scss'],
})
export class CivicProjectPanelComponent implements OnInit {
  constructor(private civilProjectService: CivilProjectService) {}

  projects: CivilProjectDto[] = [];

  ngOnInit(): void {
    this.civilProjectService
      .getAllCivilProjects()
      .subscribe((data) => (this.projects = data));
  }
  
  onVerifyProject(title: string) {
    this.civilProjectService.verifyCivilProject(title).subscribe(() => {
      this.fetchCivilProjects();
    });
  }

  fetchCivilProjects() {
    this.civilProjectService
      .getAllCivilProjects()
      .subscribe((data) => (this.projects = data));
  }
}
