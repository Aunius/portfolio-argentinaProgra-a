import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos/proyectos.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'acerca-de', component:AcercaDeComponent},
  {path:'cabecera', component:CabeceraComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'educacion', component:EducacionComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'tecnologias', component:TecnologiasComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
