import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
  }

}
