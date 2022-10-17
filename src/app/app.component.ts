import {Component, ElementRef, HostListener, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private elRef:ElementRef) { }

  height:number = (this.elRef.nativeElement.offsetHeight/100)

  @HostListener('window:resize')
  resize(){
    this.height= (this.elRef.nativeElement.offsetHeight/100)
  }

  title = 'hackheroes2022-front';

  ngOnInit(): void {
    this.resize()
  }
}
