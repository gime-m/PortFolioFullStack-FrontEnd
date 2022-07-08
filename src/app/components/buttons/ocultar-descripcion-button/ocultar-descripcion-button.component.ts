import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocultar-descripcion-button',
  templateUrl: './ocultar-descripcion-button.component.html',
  styleUrls: ['../../../styles/item.styles.css']
})
export class OcultarDescripcionButtonComponent implements OnInit {

  @Input() clases: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
