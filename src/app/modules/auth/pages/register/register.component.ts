import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    pesel: new FormControl(''),
    password: new FormControl(''),
    passwordRepeated: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  onRegisterFormSubmit(){
    
  }
}
