import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../global-component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  global = new GlobalComponent()

  showEditButtonMe: boolean = false
  showOverlayMe: boolean = false

  constructor() { }
  ngOnInit(): void {
  }
}