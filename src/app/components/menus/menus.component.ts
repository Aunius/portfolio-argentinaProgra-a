import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  nombre!: String;
  apellido!: String;
  IsLogged!: String;

  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.nombre = this.tokenService.getNombre();
    this.apellido = this.tokenService.getApellido();
    this.IsLogged = this.tokenService.getToken();
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }

}
