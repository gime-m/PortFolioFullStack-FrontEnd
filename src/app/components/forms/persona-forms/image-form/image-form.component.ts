import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class ImageFormComponent implements OnInit {
  
  @Input()   propiedad: string = "";
  @Output() showModalEvent = new EventEmitter<boolean>();

  componentForm = new FormGroup({
    imagen: new FormControl(""),
    fileSource: new FormControl ("")
  })
  get imagen() { return this.componentForm.get('imagen'); }
  get fileSource() { return this.componentForm.get('fileSource'); }

  submitForm() {
    this.pers.putImagen(this.fileSource?.value,this.propiedad)
    this.componentForm.reset()
    this.showModalEvent.emit(false)
  }
  cancelForm(){
    this.componentForm.reset()
    this.showModalEvent.emit(false)
  }

  imagenPorDefecto(){
    this.pers.deleteImagen(this.propiedad);
    this.showModalEvent.emit(false)

  }
  
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.componentForm.patchValue({
        fileSource: file
      });
    }
  }

  constructor(public pers: PersonaRequestsService) {
  }

  ngOnInit(): void {  }
}
