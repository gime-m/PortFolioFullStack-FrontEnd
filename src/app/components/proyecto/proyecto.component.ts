import { Component, OnInit } from '@angular/core';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent implements OnInit {
  
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  public showModalOrder: boolean = false;
  changeShowModalOrder(value: boolean){
    this.showModalOrder = value;
  }

  constructor(public service: ProyectoRequestsService, public login: LoginService) {
  }

  ngOnInit(): void {  }
}
