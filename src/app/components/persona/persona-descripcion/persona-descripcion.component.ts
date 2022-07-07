import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-persona-descripcion',
  templateUrl: './persona-descripcion.component.html',
  styleUrls: ['./persona-descripcion.component.css']
})

export class PersonaDescripcionComponent implements OnInit {

  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  constructor(public pers: PersonaRequestsService, public login: LoginService) {}

  ngOnInit(): void {  }
}
