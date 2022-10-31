import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca_de';
import { InicioService } from 'src/app/service/inicio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acerca_de: AcercaDe = new AcercaDe("No se ha podido cargar la información","/assets/img/img1.png");

  constructor(private inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.acerca_de().subscribe(data => {
      this.acerca_de = new AcercaDe(data.sobremi,data.url_imagen_sobremi);
    })
  }

}
