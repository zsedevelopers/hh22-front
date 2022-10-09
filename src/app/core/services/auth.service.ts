import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService:ApiService, private router:Router) { }

  login(pesel: string, password: string){
    console.log(`trying to log in with pesel: ${pesel}, password: ${password}`)
    this.router.navigate(['/auth/login'])
  }
  register(pesel: string, password: string){
    console.log(`trying to register in with pesel: ${pesel}, password: ${password}`)
    this.router.navigate(['/auth/login'])
  }
}
