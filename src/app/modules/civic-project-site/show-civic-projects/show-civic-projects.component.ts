import { Component, OnInit } from '@angular/core';
import CivilProjectDto from '../../../core/models/civil projects/civil-project-dto';
import { CivilProjectService } from '../../../core/services/civil-project.service';

@Component({
  selector: 'app-show-civic-projects',
  templateUrl: './show-civic-projects.component.html',
  styleUrls: ['./show-civic-projects.component.scss'],
})
export class ShowCivicProjectsComponent implements OnInit {
  constructor(private data: CivilProjectService) {}

<<<<<<< HEAD
  constructor(private data:CivilProjectService) { }

  city:string = 'olsztyn'

  getProjectsByCity(){
    this.data.getCivilProjectsByCity(this.city).subscribe(x=>{console.log(x)})
  }

  ngOnInit(): void {

=======
  city: string = 'olsztyn';
  projects: CivilProjectDto[] = [];
>>>>>>> 5b231273448ead6e3f087687639566e764eccac6

  getProjectsByCity() {
    this.data
      .getCivilProjectsByCity(this.city)
      .subscribe((data) => (this.projects = data));
  }

  ngOnInit(): void {}
}
