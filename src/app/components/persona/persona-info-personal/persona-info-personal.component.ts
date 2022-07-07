import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-persona-info-personal',
  templateUrl: './persona-info-personal.component.html',
  styleUrls: ['./persona-info-personal.component.css']
})

export class PersonaInfoPersonalComponent implements OnInit {
 
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  constructor(public pers: PersonaRequestsService, public login: LoginService) {
  }

  ngOnInit(): void {  }
}
