import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import RegisterRequest from 'src/app/core/models/auth/register-request';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl(''),
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
      firstName: this.registerForm.value.firstName!,
      secondName: this.registerForm.value.secondName!,
      surname: this.registerForm.value.surname!,
      email: this.registerForm.value.email!,
      city: this.registerForm.value.city!,
      pesel: this.registerForm.value.pesel!,
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
