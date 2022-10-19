import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserRole } from 'src/app/core/models/auth/UserRole';
import UserDto from 'src/app/core/models/common/user-dto';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private elRef: ElementRef,
    private authService: AuthService,
    public router: Router
  ) {}

  height: number = window.innerHeight * 15;

  isLogged: boolean = false;
  isAdmin: boolean = false;

  userData: UserDto | null = null;

  @HostListener('window:resize')
  resize() {
    this.height = (window.innerHeight / 100) * 15;
    console.log(this.height);
  }

  ngOnInit(): void {
    this.resize();
    this.fetchLoginData();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.fetchLoginData();
      });
  }

  onLogout() {
    this.authService.logout();
  }

  fetchLoginData() {
    this.isLogged = this.authService.isLogged();
    if (this.isLogged) {
      this.authService.getUserData().subscribe((data) => {
        this.userData = data;

        // @ts-ignore
        this.isAdmin = UserRole.ROLE_ADMIN == UserRole[this.userData.role];
      });
    }
  }
}
