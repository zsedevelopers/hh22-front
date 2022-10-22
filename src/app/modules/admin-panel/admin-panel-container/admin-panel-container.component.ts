import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
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
  navbarTabTitles: Record<string, string> = {
    'civic-projects': 'projekty obywatelskie',
    documents: 'dokumenty',
    'add-admin': 'dodawanie administratorów',
  };
  ngOnInit(): void {


    //to check if user is logged in and navigate to homepage if not
    this.authService
      .getUserData()
      .pipe(
        catchError((err) => {
          alert('you have to be logged in to access this feature');
          this.router.navigate(['/'])
          
          return throwError(err);
        })
      )
      .subscribe({
        next: (data: UserDto) => {
          if (
            data.role == null ||
            data.role != (UserRole[UserRole.ROLE_ADMIN] as unknown as UserRole)
          ) {
            this.router.navigate(['/']);
            alert('you have to be an admin to access this feature');
          }
        },
      });
  }
}
