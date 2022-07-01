import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-about-me-description',
  templateUrl: './about-me-description.component.html',
  styleUrls: ['./about-me-description.component.css']
})

export class AboutMeDescriptionComponent implements OnInit {

  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  constructor(public pers: PersonaRequestsService, public login: LoginService) {}

  ngOnInit(): void {  }
}
