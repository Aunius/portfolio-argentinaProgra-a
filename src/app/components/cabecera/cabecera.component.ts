import { Component, OnInit } from '@angular/core';
import { Cabecera } from 'src/app/model/cabecera';
import { InicioService } from 'src/app/service/inicio.service';
import { PeticionesService } from 'src/app/service/peticiones.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  cabecera: Cabecera = new Cabecera("No se ha podido cargar la información","No se ha podido cargar la información","/assets/img/img1.png");
  
  nombre!: string
  url_persona!: string
  saludo!: string

  errorMensaje!: string
  IsLogged!: Boolean;

  constructor(public inicioService: InicioService, public peticionesService: PeticionesService, public tokenService:TokenService) { }

  ngOnInit(): void {
    this.IsLogged = this.tokenService.getToken()?true:false;

    this.inicioService.cabecera().subscribe(data => {
      this.cabecera = new Cabecera(data.persona,data.saludo,data.url_persona);
    })

    this.errorMensaje = '';
  }

  abrirModal_exampleModal5(): void{
    this.nombre = this.cabecera.persona;
    this.url_persona = this.cabecera.url_persona;
  }

  abrirModal_exampleModal(): void{
    this.saludo = this.cabecera.saludo;
  }

  cambiarNombreFotoPerfil(): void{
    this.peticionesService.actualizarNombreFotoPerfil(new Cabecera(this.nombre,"sin_saludo",this.url_persona)).subscribe(res => {
        if(res.mensaje?? null){
          this.ngOnInit();
          (<HTMLInputElement>document.getElementById("Modal_exampleModal5_cerrar")).click();
        }
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

  cambiarSaludo(): void{
    this.peticionesService.actualizarSaludo(new Cabecera(this.nombre,this.saludo,this.url_persona)).subscribe(res => {
        if(res.mensaje?? null){
          this.ngOnInit();
          (<HTMLInputElement>document.getElementById("Modal_exampleModal_cerrar")).click();
        }
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

}