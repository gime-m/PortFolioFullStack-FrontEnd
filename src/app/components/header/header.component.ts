import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';
//import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends BaseComponent implements OnInit {

  private _logoArgSrc: string = "assets/images/APlogo.png";
  private _linkGitHub: string = "https://github.com/gime-m";
  
  public get logoArgSrc(): string {
    return this._logoArgSrc;
  }
  public get linkGitHub(): string {
    return this._linkGitHub;
  }

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
  override submitForm() {
    if (this.userForm?.value == this.user && this.passwordForm?.value == this.password){
      this.overlayOpen = false;
      this.logedIn = true;
      this.wrongLogIn = false
    } else {
      this.wrongLogIn = true;
      console.log(this.userForm?.value)
      console.log(this.passwordForm?.value)
    }
    this.componentForm.reset()  
  }

  override cancelForm(){
    this.overlayOpen = false;
    this.componentForm.reset()
  }

  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService) {
    super(screenService, global);
  }

}
