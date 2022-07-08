import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';

import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoadingComponent } from './components/loading/loading.component';

import { PersonaNombreComponent } from './components/persona/persona-nombre/persona-nombre.component';
import { PersonaImagenPerfilComponent } from './components/persona/persona-imagen-perfil/persona-imagen-perfil.component';
import { PersonaInfoPersonalComponent } from './components/persona/persona-info-personal/persona-info-personal.component';
import { PersonaDescripcionComponent } from './components/persona/persona-descripcion/persona-descripcion.component';

import { ExperienciaComponent } from './components/secciones/experiencia/experiencia.component';
import { EducacionComponent } from './components/secciones/educacion/educacion.component';
import { SkillsComponent } from './components/secciones/skills/skills.component';
import { ProyectoComponent } from './components/secciones/proyecto/proyecto.component';

import { ExperienciaItemComponent } from './components/secciones/experiencia/experiencia-item/experiencia-item.component';
import { EducacionItemComponent } from './components/secciones/educacion/educacion-item/educacion-item.component'; 
import { SkillItemComponent } from './components/secciones/skills/skill-item/skill-item.component';
import { ProyectoItemComponent } from './components/secciones/proyecto/proyecto-item/proyecto-item.component';
import { ProyectoImagenGrandeComponent } from './components/secciones/proyecto/proyecto-imagen-grande/proyecto-imagen-grande.component';
 
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { DeleteButtonComponent } from './components/buttons/delete-button/delete-button.component';
import { DragButtonComponent } from './components/buttons/drag-button/drag-button.component';
import { SaveButtonComponent } from './components/buttons/save-button/save-button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';

import { ImageFormComponent } from './components/forms/persona-forms/image-form/image-form.component';
import { ExperienciaFormComponent } from './components/forms/experiencia-forms/experiencia-form/experiencia-form.component';
import { EducacionFormComponent } from './components/forms/educacion-forms/educacion-form/educacion-form.component';
import { SkillFormComponent } from './components/forms/skill-forms/skill-form/skill-form.component';
import { ProyectoFormComponent } from './components/forms/proyecto-forms/proyecto-form/proyecto-form.component';

import { ExperienciaImagenFormComponent } from './components/forms/experiencia-forms/experiencia-imagen-form/experiencia-imagen-form.component';
import { EducacionImagenFormComponent } from './components/forms/educacion-forms/educacion-imagen-form/educacion-imagen-form.component';
import { ProyectoImagenFormComponent } from './components/forms/proyecto-forms/proyecto-imagen-form/proyecto-imagen-form.component';

import { ExperienciaOrderFormComponent } from './components/forms/experiencia-forms/experiencia-order-form/experiencia-order-form.component';
import { EducacionOrderFormComponent } from './components/forms/educacion-forms/educacion-order-form/educacion-order-form.component';
import { SkillOrderFormComponent } from './components/forms/skill-forms/skill-order-form/skill-order-form.component';
import { ProyectoOrderFormComponent } from './components/forms/proyecto-forms/proyecto-order-form/proyecto-order-form.component';

import { PersonaNombreFormComponent } from './components/forms/persona-forms/persona-nombre-form/persona-nombre-form.component';
import { PersonaDescripcionFormComponent } from './components/forms/persona-forms/persona-descripcion-form/persona-descripcion-form.component';
import { PersonaInfoPersonalFormComponent } from './components/forms/persona-forms/persona-info-personal-form/persona-info-personal-form.component';
import { TemaFormComponent } from './components/forms/tema-form/tema-form.component';

import { ConfirmacionEliminarComponent } from './components/forms/confirmacion-eliminar/confirmacion-eliminar.component';

import { InterceptorService } from './services/auth/interceptor.service';
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';
import { ImgLoadedDirective } from './services/loading/imagen-loading.directive';
import { VerDescripcionButtonComponent } from './components/buttons/ver-descripcion-button/ver-descripcion-button.component';
import { OcultarDescripcionButtonComponent } from './components/buttons/ocultar-descripcion-button/ocultar-descripcion-button.component';

registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    BannerComponent,
    PersonaImagenPerfilComponent,
    PersonaNombreComponent,
    PersonaDescripcionComponent,
    PersonaInfoPersonalComponent,
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
    EducacionFormComponent,
    ExperienciaFormComponent,
    SkillFormComponent,
    ExperienciaImagenFormComponent,
    EducacionImagenFormComponent,
    ProyectoComponent,
    ProyectoItemComponent,
    ProyectoFormComponent,
    ProyectoImagenFormComponent,
    ProyectoImagenGrandeComponent,
    LoadingComponent,
    ImgLoadedDirective,
    DragButtonComponent,
    ExperienciaOrderFormComponent,
    EducacionOrderFormComponent,
    ProyectoOrderFormComponent,
    SkillOrderFormComponent,
    PersonaNombreFormComponent,
    PersonaDescripcionFormComponent,
    PersonaInfoPersonalFormComponent,
    TemaFormComponent,
    ConfirmacionEliminarComponent,
    SaveButtonComponent,
    CancelButtonComponent,
    VerDescripcionButtonComponent,
    OcultarDescripcionButtonComponent
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
