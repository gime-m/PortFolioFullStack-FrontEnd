import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.css']
})
export class BannerImageComponent implements OnInit {

  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  constructor(public pers: PersonaRequestsService, public login: LoginService) {
  }

  ngOnInit(): void {  }
}

