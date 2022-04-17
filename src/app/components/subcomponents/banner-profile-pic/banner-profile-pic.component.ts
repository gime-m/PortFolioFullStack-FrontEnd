import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';


@Component({
  selector: 'app-banner-profile-pic',
  templateUrl: './banner-profile-pic.component.html',
  styleUrls: ['./banner-profile-pic.component.css']
})
export class BannerProfilePicComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }
}
