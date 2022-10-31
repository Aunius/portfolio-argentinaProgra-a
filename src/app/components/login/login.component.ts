import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  IsLogged = false;
  IsLogginFail = false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  errorMensaje!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.IsLogged = true;
      this.IsLogginFail = false;
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {this.IsLogged= true; 
                      this.IsLogginFail= false; 
                      this.tokenService.setToken(data.token);
                      this.tokenService.setuserName(data.usuario);
                      this.tokenService.setNombre(data.nombre);
                      this.tokenService.setApellido(data.apellido);
                      window.location.href = '';
                    }, err =>{
                      this.IsLogged = false;
                      this.IsLogginFail = true;
                      this.errorMensaje = (err.error?.mensaje ?? 'No se ha podido iniciar la sesión, compurbe sus datos');
                    })}
}
