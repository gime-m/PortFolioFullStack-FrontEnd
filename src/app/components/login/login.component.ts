import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/editing.styles.css', './login.component.css']
})
export class LoginComponent implements OnInit{
  
  backgroundImages: String[] = [] ;
  random: number = 0;

  componentForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  get username() { return this.componentForm.get('username'); }
  get password() { return this.componentForm.get('password');}

  submitForm() {
    this.auth.iniciarSesion(this.componentForm.value);
    this.componentForm.reset();  
  }
  cancelForm(){
    this.componentForm.reset();
  }

  invitado(){
    this.username?.setValue("Invitado");
    this.password?.setValue("0000");
    this.submitForm();
  }

  makeBackgroundImages(){
    for (let i = 0; i <=5; i++){
      this.backgroundImages.push('assets/images/login-background/'+(i+1)+'.jpg')
    }
  }

  constructor(public auth: AuthService) {
    this.makeBackgroundImages();
    this.random = Math.floor((Math.random()*(this.backgroundImages.length-1)))
  }

  ngOnInit(): void {  }
}
