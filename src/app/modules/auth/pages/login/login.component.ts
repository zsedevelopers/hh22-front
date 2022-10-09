import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import LoginRequest from 'src/app/core/models/login-request';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    pesel: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLoginFormSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const requestData: LoginRequest = {
      PESEL: this.loginForm.value.pesel!,
      password: this.loginForm.value.password!,
    };

    this.authService.login(requestData);
  }
}
