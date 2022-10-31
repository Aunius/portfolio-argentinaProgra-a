import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AcercaDe } from '../model/acerca_de';
import { Cabecera } from '../model/cabecera';
import { EducacionExperiencia } from '../model/educacion_experiencia';
import { Skill } from '../model/skill';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  url_base = environment.apiURL
  reqHeader

  constructor(private httpClient: HttpClient, private tokenService:TokenService) { 

    this.reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken()
    });

  }

  public actualizarNombreFotoPerfil(cabecera:Cabecera): Observable<any>{
    return this.httpClient.post<any>(this.url_base+"/actualizarNombreFoto", {"texto": cabecera.persona, "foto": cabecera.url_persona},{ headers: this.reqHeader });
  }

  public actualizarSaludo(cabecera:Cabecera): Observable<any>{
    return this.httpClient.post<any>(this.url_base+"/actualizarSaludo", {"texto": cabecera.saludo},{ headers: this.reqHeader });
  }

  public actualizarAcercaDe(objeto:AcercaDe): Observable<any>{
    return this.httpClient.post<any>(this.url_base+"/actualizarAcercaDe", {"texto": objeto.acerca, "foto":objeto.url_imagen},{ headers: this.reqHeader });
  }

  public nuevaEducacion(objeto:EducacionExperiencia): Observable<any>{
    return this.httpClient.post<any>(this.url_base+"/educacion", {"texto": objeto.texto, "foto":objeto.url_imagen},{ headers: this.reqHeader });
  }
  
  public nuevaExperiencia(objeto:EducacionExperiencia): Observable<any>{
    return this.httpClient.post<any>(this.url_base+"/experiencia", {"texto": objeto.texto, "foto":objeto.url_imagen},{ headers: this.reqHeader });
  }

  public eliminarEducacionExperiencia(objeto:BigInteger): Observable<any>{
    return this.httpClient.delete<any>(this.url_base+"/experienciaEducacion/"+objeto,{ headers: this.reqHeader });
  }

  public nuevaSkill(objeto:Skill): Observable<any>{
    let url = 'Soft';
    if(objeto.tipo == 'hard'){
      url = 'Hard';
    }
    return this.httpClient.post<any>(this.url_base+"/skill"+url, {"texto": objeto.texto, "valor":objeto.valor},{ headers: this.reqHeader });
  }

  public eliminarSkill(objeto:BigInteger): Observable<any>{
    return this.httpClient.delete<any>(this.url_base+"/skill/"+objeto,{ headers: this.reqHeader });
  }
  

}
