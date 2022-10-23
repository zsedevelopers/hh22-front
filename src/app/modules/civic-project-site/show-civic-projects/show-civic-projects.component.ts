import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import CivilProjectDto from '../../../core/models/civil projects/civil-project-dto';
import { ProjectCategory } from '../../../core/models/civil projects/project-category';
import { Icons } from '../../../core/models/civil projects/icons';
import { CivilProjectService } from '../../../core/services/civil-project.service';
import UserDto from '../../../core/models/common/user-dto';
import { CivilProjectStatus } from 'src/app/core/models/civil projects/civil-project-status';

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

  hasVoted: boolean = false;

  showProject(index: number) {
    this.currentProjectIndex = index;
  }

  hideProject() {
    this.currentProjectIndex = null;
  }

  displayedColumns: string[] = ['name', 'description', 'cost'];

  selectedCity: string = '';
  cities: string[] = [];
  selectedCategory: string = '';
  categories: string[] = [];

  projects: CivilProjectDto[] = [];

  currentUser: UserDto | null = null;

  onCitySelectChange() {
    this.loadProjects(this.selectedCity);
  }

  likeProject(title: string) {
    if (!this.authService.isLogged()) {
      return;
    }
    this.civilProjectService.likeCivilProject(title).subscribe(() => {
      this.loadProjects(this.selectedCity);
    });
  }

  isLiked(): boolean {
    if (this.currentUser == null) {
      return true;
    }
    // for (let i = 0; i < this.projects.length; i++) {
    //   for (let j = 0; j < this.projects[i].likedBy.length; j++) {
    //     if (this.projects[i].likedBy[j].pesel == this.currentUser.pesel) {
    //       return true;
    //     }
    //   }
    // }
    return this.hasVoted;
  }

  loadProjects(city: string) {
    this.civilProjectService.getCivilProjectsByCity(city).subscribe((data) => {
      data = data.filter(
        (p) =>
          p.status ==
          (CivilProjectStatus[
            CivilProjectStatus.VERIFIED
          ] as unknown as CivilProjectStatus)
      );
      if (this.currentUser != null) {
        data.forEach((p) => {
          if (
            p.likedBy.filter((u) => u.pesel == this.currentUser!.pesel).length >
            0
          ) {
            this.hasVoted = true;
          }
        });
      }
      return (this.projects = data.filter(
        (p) =>
          p.category == this.selectedCategory.toUpperCase() ||
          this.selectedCategory == 'Dowolna'
      ));
    });
  }

  getCategoryTranslated(category: string) {
    switch (category) {
      case 'SPORT':
        return 'Sport';
        break;
      case 'EDUCATION':
        return 'Edukacja';
        break;
      case 'CULTURE':
        return 'Kultura';
        break;
      case 'HEALTH':
        return 'Zdrowie';
        break;
      case 'ENVIRONMENT':
        return 'Środowisko';
        break;
      case 'INFRASTRUCTURE':
        return 'Infrastruktura';
        break;
      case 'NATURE':
        return 'Natura';
        break;
      case 'COMMUNITY':
        return 'Społeczność';
        break;
      case 'OTHER':
        return 'Inne';
      case 'Dowolna':
        return 'Dowolna';
      default:
        return 'Inne';
        break;
    }
  }

  ngOnInit(): void {
    // this.authService.getUserData().subscribe(user=>{this.currentUser = user})
    this.civilProjectService.getAllCivilProjects().subscribe((data) => {
      data = data.filter(
        (p) =>
          p.status ==
          (CivilProjectStatus[
            CivilProjectStatus.VERIFIED
          ] as unknown as CivilProjectStatus)
      );
      const uniqueCities = [...new Set(data.map((p) => p.city))];
      this.cities = uniqueCities;

      const uniqueCategories = [...new Set(data.map((p) => p.category))];
      this.categories = uniqueCategories;
      this.categories.push('Dowolna');

      if (this.categories.length > 0) {
        this.selectedCategory = this.categories[0];
      }
      if (this.cities.length > 0) {
        this.selectedCity = this.cities[0];
        this.loadProjects(this.selectedCity);
      }
    });

    if (this.authService.isLogged()) {
      this.authService.getUserData().subscribe((user) => {
        this.currentUser = user;
      });
    }
  }
}
