import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';


@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.css']
})
export class BannerImageComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }
}
