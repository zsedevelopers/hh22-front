import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    pesel: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
  });

  constructor(private authService:AuthService) {}

  ngOnInit(): void {}
  onRegisterFormSubmit() {
    if(this.registerForm.invalid || !this.passwordsMatch()){
      console.warn('invalid form data')
      return;
    }

    this.authService.register(this.registerForm.value.pesel!, this.registerForm.value.password!)
  }

  private passwordsMatch(){
    return this.registerForm.value.password === this.registerForm.value.passwordConfirm
  }
}
