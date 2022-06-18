import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProyectoItem, ProyectoItemPost } from '../model-interfaces';
import { ImagenRequestsService } from './imagen-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoRequestsService  extends ImagenRequestsService<ProyectoItem, ProyectoItemPost> {

  constructor( http: HttpClient) {
    super(http, "proy");
    this.getJSON();
  }
}
