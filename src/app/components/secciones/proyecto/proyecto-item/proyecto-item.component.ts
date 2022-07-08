import { Component, OnInit } from '@angular/core';
import { BaseItemComponent } from '../../base-item/base-item.component';
import { ProyectoItem } from 'src/app/services/model-interfaces';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['../../../../styles/item.styles.css', './proyecto-item.component.css']
})
export class ProyectoItemComponent extends BaseItemComponent<ProyectoItem,ProyectoRequestsService> implements OnInit {

  imagenGrande: boolean = false;
  changeImagenGrande(value: boolean){
    this.imagenGrande = value;
  }

  constructor(service: ProyectoRequestsService, login: LoginService) {
    super(service, login);
  }
}