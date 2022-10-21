import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-civic-project-container',
  templateUrl: './civic-project-container.component.html',
  styleUrls: ['./civic-project-container.component.scss']
})
export class CivicProjectContainerComponent implements OnInit {

  constructor(private authService:AuthService, public router:Router) { }

  ngOnInit(): void {
    //to check if user is logged in and navigate to homepage if not
    this.authService.getUserData().subscribe()
  }

}
