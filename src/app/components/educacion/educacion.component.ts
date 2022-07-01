import { Component, OnInit } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html'
})
export class EducacionComponent implements OnInit {
  
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  public showModalOrder: boolean = false;
  changeShowModalOrder(value: boolean){
    this.showModalOrder = value;
  }

  constructor(public service: EducacionRequestsService, public login: LoginService) {
  }

  ngOnInit(): void {  }
}