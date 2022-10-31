import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { InicioService } from 'src/app/service/inicio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  valores: Proyecto[] = [new Proyecto(-1,"No se ha podido cargar la información", "No se ha podido cargar la información","","")];

  constructor(public inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.proyectos().subscribe(data => {
      this.valores = [];
      data.proyectos.forEach((element: any) => {
          this.valores.push(new Proyecto(element.id, element.titulo, element.subtitulo, element.url, element.url_imagen));
      });
    })
  }
}
