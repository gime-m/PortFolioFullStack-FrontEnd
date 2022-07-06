import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmacion-eliminar',
  templateUrl: './confirmacion-eliminar.component.html',
  styleUrls: ['../../../styles/editing.styles.css', './confirmacion-eliminar.component.css']
})
export class ConfirmacionEliminarComponent implements OnInit {

  @Output() showDeleteModalEvent = new EventEmitter<boolean>();
  @Output() confirmDeleteEvent = new EventEmitter();

  cancelDelete(): void{
    this.showDeleteModalEvent.emit(false);
  }

  confirmDelete(){
    this.showDeleteModalEvent.emit(false);
    this.confirmDeleteEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
