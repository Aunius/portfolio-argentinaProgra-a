import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/service/inicio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.cabecera().subscribe(data => {
      console.log(data)
    })
  }

}
