import { Component, OnInit, HostListener  } from '@angular/core';
import { GlobalComponent } from '../global-component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})

export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.screenSize()
  }

  global = new GlobalComponent()
  smallScreen: boolean = true

  showEditButtonSobreMi: boolean = false
  overlayOpenSobreMi: boolean = false
  sobreMiForm = new FormControl(this.global.sobreMi, [
    Validators.required,
    Validators.minLength(100),
    Validators.maxLength(600)
  ]);

  locationIcon: string = "assets/icons/geo-alt-fill.svg"
  workplaceIcon: string = "assets/icons/building.svg"
  emailIcon: string = "assets/icons/envelope.svg"
  phoneIcon: string = "assets/icons/telephone-fill.svg"

  showEditButtonInfo: boolean = false
  overlayOpenInfo: boolean = false

  screenSize(){
    if (window.innerWidth < 575) {this.smallScreen = true} else {this.smallScreen = false}
  }

  submitSobreMi() {
    this.overlayOpenSobreMi = false,
    this.global.sobreMi=this.sobreMiForm.value
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {this.screenSize()}

}