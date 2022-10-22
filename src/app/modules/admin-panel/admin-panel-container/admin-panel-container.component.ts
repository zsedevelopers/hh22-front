import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { UserRole } from 'src/app/core/models/auth/UserRole';
import UserDto from 'src/app/core/models/common/user-dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotAnAdminDialogComponent } from 'src/app/not-an-admin-dialog/not-an-admin-dialog.component';

@Component({
  selector: 'app-admin-panel-container',
  templateUrl: './admin-panel-container.component.html',
  styleUrls: ['./admin-panel-container.component.scss'],
})
export class AdminPanelContainerComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  navbarLinks = ['civic-projects', 'documents', 'add-admin'];
  navbarTabTitles: Record<string, string> = {
    'civic-projects': 'projekty obywatelskie',
    documents: 'dokumenty',
    'add-admin': 'dodawanie administratorów',
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(NotAnAdminDialogComponent, {
      backdropClass: 'dialog-backdrop',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    //to check if user is logged in and navigate to homepage if not
    this.authService
      .getUserData()
      .pipe(
        catchError((err) => {
          // alert('you have to be logged in to access this feature');
          // this.router.navigate(['/']);
          this.openDialog();

          return throwError(err);
        })
      )
      .subscribe({
        next: (data: UserDto) => {
          if (
            data.role == null ||
            data.role != (UserRole[UserRole.ROLE_ADMIN] as unknown as UserRole)
          ) {
            // this.router.navigate(['/']);
            // alert('you have to be an admin to access this feature');
            this.openDialog(); // admin
          }
        },
      });
  }
}
