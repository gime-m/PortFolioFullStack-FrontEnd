import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalComponent } from '../global-component';

@Component({
  selector: 'app-base',
  template: `<p> base works! </p>`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit{

  constructor() { }
  global = new GlobalComponent()
  showEditButton: boolean = false
  overlayOpen: boolean = false
  smallScreen: boolean = true

  screenSize(){
    if (window.innerWidth < 575) {this.smallScreen = true} else {this.smallScreen = false}
  }

  submitForm() {}

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {this.screenSize()}

  ngOnInit(): void { this.screenSize() }

}
