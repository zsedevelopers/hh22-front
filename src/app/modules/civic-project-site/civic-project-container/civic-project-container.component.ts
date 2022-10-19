import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-civic-project-container',
  templateUrl: './civic-project-container.component.html',
  styleUrls: ['./civic-project-container.component.scss']
})
export class CivicProjectContainerComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
