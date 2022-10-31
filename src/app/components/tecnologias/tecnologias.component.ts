import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { InicioService } from 'src/app/service/inicio.service';
import { PeticionesService } from 'src/app/service/peticiones.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  hard: Skill[] = [new Skill(-1,"No se ha podido cargar la información","hard",0)];
  soft: Skill[] = [new Skill(-1,"No se ha podido cargar la información","soft",0)];
  IsLogged!: Boolean;

  errorMensaje!: string
  texto!: string
  valor!: number
  
  constructor(public inicioService: InicioService, public peticionesService: PeticionesService, public tokenService:TokenService) { }

  ngOnInit(): void {
    this.IsLogged = this.tokenService.getToken()?true:false;
    this.inicioService.skills().subscribe(data => {
      this.hard = [];
      this.soft = [];
      data.skills.forEach((element: any) => {
        if(element.tipo == 'hard'){
          this.hard.push(new Skill(element.id, element.texto,element.tipo,element.valor));
        }
        if(element.tipo == 'soft'){
          this.soft.push(new Skill(element.id, element.texto,element.tipo,element.valor));
        }
      });
    })
    
    this.errorMensaje='';
    this.texto='';
    this.valor=0;
  }

  agregarSoft(): void{
    this.peticionesService.nuevaSkill(new Skill(-1,this.texto,'soft',this.valor)).subscribe(res => {
        if(res){
          this.ngOnInit();
          (<HTMLInputElement>document.getElementById("exampleModalsoft_cerrar")).click();
        }
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }
  agregarHard(): void{
    this.peticionesService.nuevaSkill(new Skill(0,this.texto,'hard',this.valor)).subscribe(res => {
        if(res){
          this.ngOnInit();
          (<HTMLInputElement>document.getElementById("exampleModalhard_cerrar")).click();
        }
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

  quitar(id:any): void{
    this.peticionesService.eliminarSkill(id).subscribe(res => {
      this.ngOnInit();
      },
      err => {
        this.errorMensaje = 'Ha ocurrido un error, reintente nuevamente mas tarde';
      });
  }

}
