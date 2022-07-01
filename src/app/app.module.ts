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
import { HeaderComponent } from './components/header/header.component';
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
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';
import { EducacionItemComponent } from './components/educacion/educacion-item/educacion-item.component'; 
import { SkillItemComponent } from './components/skills/skill-item/skill-item.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { DeleteButtonComponent } from './components/buttons/delete-button/delete-button.component';

import localeEs from '@angular/common/locales/es';
import { InterceptorService } from './services/auth/interceptor.service';
import { ImageFormComponent } from './components/forms/persona-forms/image-form/image-form.component';
import { BaseFormPersonaComponent } from './components/forms/persona-forms/base-form-persona/base-form-persona.component';
import { EducacionFormComponent } from './components/forms/educacion-forms/educacion-form/educacion-form.component';
import { BaseFormItemComponent } from './components/forms/base-form-item/base-form-item.component';
import { BaseItemComponent } from './components/base-item/base-item.component';
import { ExperienciaFormComponent } from './components/forms/experiencia-forms/experiencia-form/experiencia-form.component';
import { SkillFormComponent } from './components/forms/skill-forms/skill-form/skill-form.component';
import { ImagenItemFormComponent } from './components/forms/imagen-item-form/imagen-item-form.component';
import { ExperienciaImagenFormComponent } from './components/forms/experiencia-forms/experiencia-imagen-form/experiencia-imagen-form.component';
import { EducacionImagenFormComponent } from './components/forms/educacion-forms/educacion-imagen-form/educacion-imagen-form.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectoItemComponent } from './components/proyecto/proyecto-item/proyecto-item.component';
import { ProyectoFormComponent } from './components/forms/proyecto-forms/proyecto-form/proyecto-form.component';
import { ProyectoImagenFormComponent } from './components/forms/proyecto-forms/proyecto-imagen-form/proyecto-imagen-form.component';
import { ProyectoImagenGrandeComponent } from './components/proyecto/proyecto-imagen-grande/proyecto-imagen-grande.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';
import { ImgLoadedDirective } from './services/loading/imagen-loading.directive';
import { OrderFormBaseComponent } from './components/forms/order-form-base/order-form-base.component';
import { DragButtonComponent } from './components/buttons/drag-button/drag-button.component';
import { ExperienciaOrderFormComponent } from './components/forms/experiencia-forms/experiencia-order-form/experiencia-order-form.component';
import { EducacionOrderFormComponent } from './components/forms/educacion-forms/educacion-order-form/educacion-order-form.component';
import { ProyectoOrderFormComponent } from './components/forms/proyecto-forms/proyecto-order-form/proyecto-order-form.component';
import { SkillOrderFormComponent } from './components/forms/skill-forms/skill-order-form/skill-order-form.component';
import { BannerNameFormComponent } from './components/forms/persona-forms/banner-name-form/banner-name-form.component';
import { AboutMeDescripcionFormComponent } from './components/forms/persona-forms/about-me-descripcion-form/about-me-descripcion-form.component';
import { AboutMeInfoFormComponent } from './components/forms/persona-forms/about-me-info-form/about-me-info-form.component';
import { TemaFormComponent } from './components/forms/tema-form/tema-form.component';
registerLocaleData(localeEs, 'es')


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    BannerImageComponent,
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
    SkillOrderFormComponent,
    BannerNameFormComponent,
    AboutMeDescripcionFormComponent,
    AboutMeInfoFormComponent,
    TemaFormComponent
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
export class AppModule { 
}
