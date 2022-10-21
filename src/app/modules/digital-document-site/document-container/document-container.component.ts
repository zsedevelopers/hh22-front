import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent implements OnInit {

  constructor(private authService:AuthService, public router:Router) { }

  ngOnInit(): void {
    //to check if user is logged in and navigate to homepage if not
    this.authService.getUserData().subscribe()
  }

}
