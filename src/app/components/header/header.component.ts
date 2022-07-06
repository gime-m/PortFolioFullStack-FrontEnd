import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  private _logoArgSrc: string = "assets/images/APlogo.png";
  private _linkGitHub: string = "https://github.com/gime-m";
  
  public get logoArgSrc(): string {
    return this._logoArgSrc;
  }
  public get linkGitHub(): string {
    return this._linkGitHub;
  }

  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  link(id: string): void {
    let element = document.getElementById(id);

    if (element) {
      let headerOffset = 100;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  constructor (public login: LoginService, public auth: AuthService) {
  }

  ngOnInit(): void {  }
}
