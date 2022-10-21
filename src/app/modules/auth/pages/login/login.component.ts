import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import LoginRequest from 'src/app/core/models/auth/login-request';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    pesel: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{11}'),
    ]),
    password: new FormControl('', Validators.required),
  });

  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLoginFormSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const requestData: LoginRequest = {
      pesel: this.loginForm.value.pesel!,
      password: this.loginForm.value.password!,
    };

    this.authService.login(requestData).subscribe({
      error: (error) => {
        console.log(error.status);
        if (error.status == 401) {
          console.log('a')
          this.errorMessage = 'niepoprawne dane logowania';
        }
      },
    });
  }
}
