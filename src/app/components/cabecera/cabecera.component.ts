import { Component, OnInit } from '@angular/core';
import { Cabecera } from 'src/app/model/cabecera';
import { InicioService } from 'src/app/service/inicio.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  cabecera: Cabecera = new Cabecera("No se ha podido cargar la información","No se ha podido cargar la información","/assets/img/img1.png");
  
  constructor(public inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.cabecera().subscribe(data => {
      this.cabecera = new Cabecera(data.persona,data.saludo,data.url_persona);
    })
  }

}