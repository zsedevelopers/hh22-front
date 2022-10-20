import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/core/models/auth/UserRole';
import UserDto from 'src/app/core/models/common/user-dto';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-panel-container',
  templateUrl: './admin-panel-container.component.html',
  styleUrls: ['./admin-panel-container.component.scss'],
})
export class AdminPanelContainerComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  navbarLinks = ['civic-projects', 'documents', 'add-admin'];
  navbarTabTitles:Record<string, string> = {
    'civic-projects': 'projekty obywatelskie',
    'documents': 'dokumenty',
    'add-admin': 'dodawanie administratorów',
  };
  ngOnInit(): void {
    //TODO: uncomment later !VERY IMPORTANT!
    // if (!this.authService.isLogged()) {
    //   console.warn('you have to be logged in to access this page')
    //   this.router.navigate(['/']);
    // } else {
    //   this.authService.getUserData().subscribe((data: UserDto) => {
    //     if (data == null || data.role != UserRole.ROLE_ADMIN) {
    //       console.warn(`you're not an admin!`)
    //       this.router.navigate(['/']);
    //     }
    //   });
    // }
  }
}
