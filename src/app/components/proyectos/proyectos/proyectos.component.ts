import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { InicioService } from 'src/app/service/inicio.service';
import { PeticionesService } from 'src/app/service/peticiones.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  valores: Proyecto[] = [new Proyecto(-1,"No se ha podido cargar la información", "No se ha podido cargar la información","","")];
  IsLogged!: Boolean;

  titulo!:string
  subtitulo!:string
  url_imagen!:string
  url!:string
  errorMensaje!:string

  constructor(public inicioService: InicioService, public peticionesService: PeticionesService, public tokenService:TokenService) { }

  ngOnInit(): void {
    this.IsLogged = this.tokenService.getToken()?true:false;
    this.inicioService.proyectos().subscribe(data => {
      this.valores = [];
      data.proyectos.forEach((element: any) => {
          this.valores.push(new Proyecto(element.id, element.titulo, element.subtitulo, element.url, element.url_imagen));
      });
    })
    this.errorMensaje='';
    this.titulo='';
    this.subtitulo='';
    this.url_imagen='';
    this.url='';
  }

  agregar(): void{
    this.peticionesService.nuevoProyecto(new Proyecto(0,this.titulo,this.subtitulo,this.url_imagen,this.url)).subscribe(res => {
        if(res){
          this.ngOnInit();
          (<HTMLInputElement>document.getElementById("exampleModal6_cerrar")).click();
        }
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

  quitar(id:any): void{
    this.peticionesService.eliminarProyecto(id).subscribe(res => {
      this.ngOnInit();
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

}
