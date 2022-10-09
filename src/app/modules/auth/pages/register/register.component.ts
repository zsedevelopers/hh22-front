import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import RegisterRequest from 'src/app/core/models/register-request';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    pesel: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onRegisterFormSubmit() {
    if (this.registerForm.invalid || !this.passwordsMatch()) {
      console.warn('invalid form data');
      return;
    }

    const requestData: RegisterRequest = {
      name: this.registerForm.value.name!,
      surname: this.registerForm.value.surname!,
      email: this.registerForm.value.email!,
      city: this.registerForm.value.city!,
      PESEL: this.registerForm.value.pesel!,
      phoneNumber: parseInt(this.registerForm.value.phoneNumber!),
      password: this.registerForm.value.password!,
    };
    this.authService.register(requestData);
  }

  private passwordsMatch() {
    return (
      this.registerForm.value.password ===
      this.registerForm.value.passwordConfirm
    );
  }
}
