import { Component, OnInit } from '@angular/core';
import { EducacionExperiencia } from 'src/app/model/educacion_experiencia';
import { InicioService } from 'src/app/service/inicio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  
  valores: EducacionExperiencia[] = [new EducacionExperiencia(-1,"No se ha podido cargar la información","experiencia","/assets/img/img1.png")];
  
  constructor(public inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.experiencia().subscribe(data => {
      this.valores = [];
      data.items.forEach((element: any) => {
        this.valores.push(new EducacionExperiencia(element.id, element.texto,element.tipo,element.url_imagen));
      });
    })
  }

}
