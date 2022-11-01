import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca_de';
import { InicioService } from 'src/app/service/inicio.service';
import { PeticionesService } from 'src/app/service/peticiones.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acerca_de: AcercaDe = new AcercaDe("No se ha podido cargar la información","/assets/img/img1.png");

  IsLogged!: Boolean;

  texto!: string
  url_persona!: string
  errorMensaje!: string

  constructor(public inicioService: InicioService, public peticionesService: PeticionesService, public tokenService:TokenService) { }

  ngOnInit(): void {
    this.IsLogged = this.tokenService.getToken()?true:false;

    this.inicioService.acerca_de().subscribe(data => {
      this.acerca_de = new AcercaDe(data.sobremi,data.url_imagen_sobremi);
    })
    this.errorMensaje = '';
  }

  abrirModal(): void{
    this.texto = this.acerca_de.acerca;
    this.url_persona = this.acerca_de.url_imagen;
  }

  actualizarAcerca(): void{
    this.peticionesService.actualizarAcercaDe(new AcercaDe(this.texto,this.url_persona)).subscribe(res => {
        if(res.mensaje?? null){
          this.ngOnInit();
          (<HTMLInputElement>document.getElementById("Modal_exampleModal2_cerrar")).click();
        }
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

}
