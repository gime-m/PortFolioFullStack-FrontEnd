import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProyectoItem, ProyectoItemPost } from '../model-interfaces';
import { GlobalVariablesService } from './global-variables.service';
import { ImagenRequestsService } from './imagen-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoRequestsService  extends ImagenRequestsService<ProyectoItem, ProyectoItemPost> {

  constructor( http: HttpClient, gv: GlobalVariablesService) {
    super(http, "proy", gv);
    this.getJSON();
  }
}
