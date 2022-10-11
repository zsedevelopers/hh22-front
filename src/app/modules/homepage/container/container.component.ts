import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  height:number = window.innerHeight/100

  constructor() { }

  ngOnInit(): void {
    console.log(this.height)
    console.log(window.innerHeight)
  }

}
