import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  routeDocument:string = ""
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.routeDocument = params.get('document')!
    })
  }

}
