import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos/proyectos.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { MenusComponent } from './components/menus/menus.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

/* import { interceptorProvider } from './service/interceptor-service'; */

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    TecnologiasComponent,
    MenusComponent,
    ContactoComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    /* interceptorProvider */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
