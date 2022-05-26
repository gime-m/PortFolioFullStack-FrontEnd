import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit{
  
  backgroundImages: String[] = [] ;
  random: number = 0;

  //Form
  componentForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  //Form getter
  get username() { return this.componentForm.get('username'); }
  get password() { return this.componentForm.get('password');}

  //Form methods
  submitForm() {
    this.auth.iniciarSesion(this.componentForm.value);
    this.componentForm.reset()  
  }
  cancelForm(){
    this.componentForm.reset()
  }

  makeBackgroundImages(){
    for (let i = 0; i <=5; i++){
      this.backgroundImages.push('assets/images/login-background/'+(i+1)+'.jpg')
    }
  }

  //Constructor
  constructor(screenService: ScreenSizeService, login: LoginService, public auth: AuthService) {
    super(screenService, login);
    this.makeBackgroundImages();
    this.random = Math.floor((Math.random()*(this.backgroundImages.length-1)))
  }
}
