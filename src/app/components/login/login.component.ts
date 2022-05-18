import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit{

  logedIn: boolean = false
  wrongLogIn: boolean = false
  user: string = "Gimena"
  password: string = "a"
  
  //Form
  componentForm = new FormGroup({
    userForm: new FormControl("", [Validators.required]),
    passwordForm: new FormControl("", [Validators.required]),
  })

  //Form getter
  get userForm() { return this.componentForm.get('userForm'); }
  get passwordForm() { return this.componentForm.get('passwordForm');}

  //Form methods
  submitForm() {
    if (this.userForm?.value == this.user && this.passwordForm?.value == this.password){
      this.logedIn = true;
      this.wrongLogIn = false
    } else {
      this.wrongLogIn = true;
      console.log(this.userForm?.value)
      console.log(this.passwordForm?.value)
    }
    this.componentForm.reset()  
  }
  cancelForm(){
    this.componentForm.reset()
  }
  
  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, login: LoginService, private auth: AuthService, private route:Router) {
    super(screenService, global, login);
  }



  onEnviar(event: Event){
    event.preventDefault;
    this.auth.IniciarSesion(this.componentForm.value).subscribe(data=>{
      console.log("DATA: "+JSON.stringify(data))
      this.route.navigate(['/portfolio'])
    })
  }

}
