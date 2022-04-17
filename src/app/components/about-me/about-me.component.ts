import { Component, OnInit} from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})

export class AboutMeComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }
}