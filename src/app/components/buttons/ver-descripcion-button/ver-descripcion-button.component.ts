import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-descripcion-button',
  templateUrl: './ver-descripcion-button.component.html',
  styleUrls: ['../../../styles/item.styles.css']
})
export class VerDescripcionButtonComponent implements OnInit {

  @Input() clases: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
