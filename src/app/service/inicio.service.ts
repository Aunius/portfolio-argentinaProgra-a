import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  url_base = 'http://localhost:8080/home/'

  constructor(private httpClient: HttpClient) { }

  public cabecera(): Observable<any>{
    return this.httpClient.get<any>(this.url_base+"cabecera");
  }

  public acerca_de(): Observable<any>{
    return this.httpClient.get<any>(this.url_base+"acerca_de");
  }

  public educacion(): Observable<any>{
    return this.httpClient.get<any>(this.url_base+"educacion");
  }

  public experiencia(): Observable<any>{
    return this.httpClient.get<any>(this.url_base+"experiencia");
  }

  public skills(): Observable<any>{
    return this.httpClient.get<any>(this.url_base+"skills");
  }

  public proyectos(): Observable<any>{
    return this.httpClient.get<any>(this.url_base+"proyectos");
  }
}
