import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private elRef:ElementRef) { }

  height:number = (window.innerHeight) * 15

  @HostListener('window:resize')
  resize(){
    this.height= (window.innerHeight/100) * 15
    console.log(this.height)
  }

  ngOnInit(): void {
    this.resize()
  }
}
