import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { BannerImageComponent } from './components/banner/banner-image/banner-image.component';
import { BannerProfilePicComponent } from './components/banner/banner-profile-pic/banner-profile-pic.component';
import { BannerNameComponent } from './components/banner/banner-name/banner-name.component'; 
import { AboutMeDescriptionComponent } from './components/about-me/about-me-description/about-me-description.component';
import { AboutMeInfoComponent } from './components/about-me/about-me-info/about-me-info.component';
import { ExperienciaItemComponent } from './components/experiencia/experiencia-item/experiencia-item.component';
import { EditButtonComponent } from './components/subcomponents/edit-button/edit-button.component';
import { EducacionItemComponent } from './components/educacion/educacion-item/educacion-item.component';
import { SkillItemComponent } from './components/skills/skill-item/skill-item.component';
import { AddButtonComponent } from './components/subcomponents/add-button/add-button.component';
import { DoneButtonComponent } from './components/subcomponents/done-button/done-button.component';
import { DeleteButtonComponent } from './components/subcomponents/delete-button/delete-button.component';

import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es')

//import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperienciaComponent,
    BannerComponent,
    BannerImageComponent,
    BaseComponent,
    BannerProfilePicComponent,
    BannerNameComponent,
    AboutMeDescriptionComponent,
    AboutMeInfoComponent,
    ExperienciaItemComponent,
    EditButtonComponent,
    EducacionComponent,
    EducacionItemComponent,
    SkillsComponent,
    SkillItemComponent,
    AddButtonComponent,
    DoneButtonComponent,
    DeleteButtonComponent,
    LoginComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //OverlayModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
