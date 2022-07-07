import { Component, OnInit } from '@angular/core';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html'
})
export class ExperienciaComponent implements OnInit {
  
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  public showModalOrder: boolean = false;
  changeShowModalOrder(value: boolean){
    this.showModalOrder = value;
  }

  constructor(public service: ExperienciaRequestsService, public login: LoginService) {
  }

  ngOnInit(): void {  }  
}