import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import RegisterRequest from 'src/app/core/models/auth/register-request';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  peselRegex = '^[0-9]{11}$'
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl(''),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    pesel: new FormControl('', [
      Validators.required,
      Validators.pattern(this.peselRegex),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      // Validators.pattern("^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$"),
    ]),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
  });
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // const regex: RegExp = new RegExp(
    //   '^(?:(?:(?:(?:+|00)d{2})?[ -]?(?:(?:(0?d{2}))|(?:0?d{2})))?[ -]?(?:d{3}[- ]?d{2}[- ]?d{2}|d{2}[- ]?d{2}[- ]?d{3}|d{7})|(?:(?:(?:+|00)d{2})?[ -]?d{3}[ -]?d{3}[ -]?d{3}))$'
    // );
    // const res = regex.exec('asdasd')
  }
  onRegisterFormSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    if (!this.passwordsMatch) {
      this.errorMessage = 'Hasła muszą być identyczne';
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

  get passwordsMatch() {

    return (
      this.registerForm.value.password ==
      this.registerForm.value.passwordConfirm
    );
  }
}
