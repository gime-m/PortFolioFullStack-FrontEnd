import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['../../../styles/editing.styles.css']
})
export class SaveButtonComponent implements OnInit {

  @Input() desactivado: boolean = false;
  @Input() titulo: string = "Guardar";
  @Input() clases: string = "";
  @Output() clickEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
