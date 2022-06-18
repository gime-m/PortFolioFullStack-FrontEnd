import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpItem, ExpItemPost } from '../model-interfaces';
import { ImagenRequestsService } from './imagen-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaRequestsService extends ImagenRequestsService<ExpItem, ExpItemPost> {

  constructor( http: HttpClient) {
    super(http, "exp");
    this.getJSON();
  }
}

