import { Component, OnInit } from '@angular/core';
import { EducacionExperiencia } from 'src/app/model/educacion_experiencia';
import { InicioService } from 'src/app/service/inicio.service';
import { PeticionesService } from 'src/app/service/peticiones.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  
  valores: EducacionExperiencia[] = [new EducacionExperiencia(-1,"No se ha podido cargar la información","experiencia","/assets/img/img1.png")];
  
  IsLogged!: Boolean;

  texto!: string
  url_imagen!: string
  errorMensaje!: string

  constructor(public inicioService: InicioService, public peticionesService: PeticionesService, public tokenService:TokenService) { }

  ngOnInit(): void {
    this.IsLogged = this.tokenService.getToken()?true:false;
    this.inicioService.experiencia().subscribe(data => {
      this.valores = [];
      data.items.forEach((element: any) => {
        this.valores.push(new EducacionExperiencia(element.id, element.texto,element.tipo,element.url_imagen));
      });
    })
    this.texto='';
    this.url_imagen='';
    this.errorMensaje='';
  }

  agregar(): void{
    this.peticionesService.nuevaExperiencia(new EducacionExperiencia(0,this.texto,'educacion',this.url_imagen)).subscribe(res => {
        if(res){
          this.ngOnInit();
          (<HTMLInputElement>document.getElementById("Modal_exampleModal3_cerrar")).click();
        }
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

  quitar(id:any): void{
    this.peticionesService.eliminarEducacionExperiencia(id).subscribe(res => {
      this.ngOnInit();
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

}
