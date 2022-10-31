import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url_base = environment.apiURL+'/contacto'

  constructor(private httpClient: HttpClient) { }

  public contacto(contacto: Contacto): Observable<any>{
    return this.httpClient.post<any>(this.url_base, contacto);
  }
}
