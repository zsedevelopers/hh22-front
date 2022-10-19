import {Component, OnInit, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-middlebar',
  templateUrl: './middlebar.component.html',
  styleUrls: ['./middlebar.component.scss']
})
export class MiddlebarComponent implements OnInit {

  constructor(private elRef:ElementRef) { }

  height:number = (window.innerHeight) * 85

  @HostListener('window:resize')
  resize(){
    this.height= (window.innerHeight/100) * 85
  }
  ngOnInit(): void {
    this.resize()
  }

}
