import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { InicioService } from 'src/app/service/inicio.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  hard: Skill[] = [new Skill(-1,"No se ha podido cargar la información","hard",0)];
  soft: Skill[] = [new Skill(-1,"No se ha podido cargar la información","soft",0)];
  
  constructor(public inicioService: InicioService) { }

  ngOnInit(): void {
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
  }

}
