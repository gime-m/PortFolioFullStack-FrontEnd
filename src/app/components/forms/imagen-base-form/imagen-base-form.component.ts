import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-imagen-base-form',
  templateUrl: './imagen-base-form.component.html'
})
export class ImagenBaseFormComponent implements OnInit {

  @Output() showModalEvent = new EventEmitter<boolean>();

  componentForm = new FormGroup({
    imagen: new FormControl("", Validators.required),
    fileSource: new FormControl ("", [maxSizeValidator(25000000), fileImageValidator()])
  })
  get imagen() { return this.componentForm.get('imagen'); }
  get fileSource() { return this.componentForm.get('fileSource'); }

  submitForm() {
    this.componentForm.reset();
    this.showModalEvent.emit(false);
  }
  cancelForm(){
    this.componentForm.reset();
    this.showModalEvent.emit(false);
  }

  imagenPorDefecto(){
    this.showModalEvent.emit(false);
  }
  
  onFileChange() {
    let fileList = (<HTMLInputElement>document.getElementById('img-id')).files;
    if (fileList && fileList.length > 0) {
      const file = fileList.item(0);
      if (file) {
        this.componentForm.patchValue({
          fileSource: file
        });
      }
    }
  }

  constructor() { }

  ngOnInit(): void {}
}

function maxSizeValidator(maxSize: number): ValidatorFn {
  let forbidden = false;
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value){
      forbidden = control.value.size > maxSize;
    }    
    return forbidden ? {'fileSizeExceded': true} : null;
  };
}

function fileImageValidator(): ValidatorFn {
  let forbidden = false;
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value){
      forbidden = !control.value.type.includes("image/")
    }   
    return forbidden ? { 'notImage': true } : null;
  };
} 
