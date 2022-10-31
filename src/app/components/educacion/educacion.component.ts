import { Component, OnInit } from '@angular/core';
import { EducacionExperiencia } from 'src/app/model/educacion_experiencia';
import { InicioService } from 'src/app/service/inicio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {


  valores: EducacionExperiencia[] = [new EducacionExperiencia(-1,"No se ha podido cargar la información","educacion","/assets/img/img1.png")];
  
  constructor(public inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.educacion().subscribe(data => {
      this.valores = [];
      data.items.forEach((element: any) => {
        this.valores.push(new EducacionExperiencia(element.id, element.texto,element.tipo,element.url_imagen));
      });
    })
  }

}
