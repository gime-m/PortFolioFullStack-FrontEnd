import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proyecto-imagen-grande',
  templateUrl: './proyecto-imagen-grande.component.html',
  styleUrls: ['./proyecto-imagen-grande.component.css']
})
export class ProyectoImagenGrandeComponent implements OnInit {

  @Input() imagen:string="";
  @Output() imagenGrandeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
