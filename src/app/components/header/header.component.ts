import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  logoArgSrc: string = "assets/images/APlogo.png"
  logoArgAlt: string = "Logo Argentina Programa"
  //gitHubIcon: string = "assets/icons/github.svg"
  linkGitHub: string = "https://github.com/gime-m"

  ngOnInit(): void {
  }

}
