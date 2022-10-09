import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    pesel: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordRepeated: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}
  onRegisterFormSubmit() {}
}
