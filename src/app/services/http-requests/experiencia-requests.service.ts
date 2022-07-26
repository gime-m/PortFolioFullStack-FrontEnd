import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpItem, ExpItemPost } from '../model-interfaces';
import { GlobalVariablesService } from './global-variables.service';
import { ImagenRequestsService } from './imagen-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaRequestsService extends ImagenRequestsService<ExpItem, ExpItemPost> {

  constructor( http: HttpClient, gv: GlobalVariablesService) {
    super(http, "exp", gv);
    this.getJSON();
  }
}

