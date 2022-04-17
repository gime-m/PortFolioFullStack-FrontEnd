import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { FormsModule } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { BannerComponent } from './components/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerImageComponent } from './components/subcomponents/banner-image/banner-image.component';
import { BaseComponent } from './components/base/base.component';
import { BannerProfilePicComponent } from './components/subcomponents/banner-profile-pic/banner-profile-pic.component';
import { BannerNameComponent } from './components/subcomponents/banner-name/banner-name.component';
import { AboutMeDescriptionComponent } from './components/subcomponents/about-me-description/about-me-description.component';
import { AboutMeInfoComponent } from './components/subcomponents/about-me-info/about-me-info.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
