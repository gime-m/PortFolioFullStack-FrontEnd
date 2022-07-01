import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-banner-profile-pic',
  templateUrl: './banner-profile-pic.component.html',
  styleUrls: ['./banner-profile-pic.component.css']
})
export class BannerProfilePicComponent implements OnInit {

  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  constructor(public pers: PersonaRequestsService, public login: LoginService) {
  }

  ngOnInit(): void {  }
}

