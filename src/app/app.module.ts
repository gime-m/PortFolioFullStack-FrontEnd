import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import {DragDropModule} from '@angular/cdk/drag-drop';

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
import { DeleteButtonComponent } from './components/subcomponents/delete-button/delete-button.component';

import localeEs from '@angular/common/locales/es';
import { InterceptorService } from './services/auth/interceptor.service';
import { ImageFormComponent } from './components/banner/image-form/image-form.component';
import { BaseFormPersonaComponent } from './components/base/base-form-persona/base-form-persona.component';
import { EducacionFormComponent } from './components/educacion/educacion-form/educacion-form.component';
import { BaseFormItemComponent } from './components/base/base-form-item/base-form-item.component';
import { BaseItemComponent } from './components/base/base-item/base-item.component';
import { ExperienciaFormComponent } from './components/experiencia/experiencia-form/experiencia-form.component';
import { SkillFormComponent } from './components/skills/skill-form/skill-form.component';
import { ImagenItemFormComponent } from './components/base/imagen-item-form/imagen-item-form.component';
import { ExperienciaImagenFormComponent } from './components/experiencia/experiencia-imagen-form/experiencia-imagen-form.component';
import { EducacionImagenFormComponent } from './components/educacion/educacion-imagen-form/educacion-imagen-form.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectoItemComponent } from './components/proyecto/proyecto-item/proyecto-item.component';
import { ProyectoFormComponent } from './components/proyecto/proyecto-form/proyecto-form.component';
import { ProyectoImagenFormComponent } from './components/proyecto/proyecto-imagen-form/proyecto-imagen-form.component';
import { ProyectoImagenGrandeComponent } from './components/proyecto/proyecto-imagen-grande/proyecto-imagen-grande.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';
import { ImgLoadedDirective } from './services/loading/imagen-loading.directive';
import { OrderFormBaseComponent } from './components/base/order-form-base/order-form-base.component';
import { DragButtonComponent } from './components/subcomponents/drag-button/drag-button.component';
import { ExperienciaOrderFormComponent } from './components/experiencia/experiencia-order-form/experiencia-order-form.component';
import { EducacionOrderFormComponent } from './components/educacion/educacion-order-form/educacion-order-form.component';
import { ProyectoOrderFormComponent } from './components/proyecto/proyecto-order-form/proyecto-order-form.component';
import { SkillOrderFormComponent } from './components/skills/skill-order-form/skill-order-form.component';
registerLocaleData(localeEs, 'es')


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
    DeleteButtonComponent,
    LoginComponent,
    PortfolioComponent,
    ImageFormComponent,
    BaseFormPersonaComponent,
    EducacionFormComponent,
    BaseFormItemComponent,
    BaseItemComponent,
    ExperienciaFormComponent,
    SkillFormComponent,
    ImagenItemFormComponent,
    ExperienciaImagenFormComponent,
    EducacionImagenFormComponent,
    ProyectoComponent,
    ProyectoItemComponent,
    ProyectoFormComponent,
    ProyectoImagenFormComponent,
    ProyectoImagenGrandeComponent,
    LoadingComponent,
    ImgLoadedDirective,
    OrderFormBaseComponent,
    DragButtonComponent,
    ExperienciaOrderFormComponent,
    EducacionOrderFormComponent,
    ProyectoOrderFormComponent,
    SkillOrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClickOutsideModule,
    DragDropModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
