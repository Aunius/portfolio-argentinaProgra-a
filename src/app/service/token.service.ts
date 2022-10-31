import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const NOMBRE_KEY = 'AuthNOMBRE';
const APELLIDO_KEY = 'AuthAPELLIDO';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setuserName(userName:string):void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getuserName():string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setNombre(Nombre:string):void{
    window.sessionStorage.removeItem(NOMBRE_KEY);
    window.sessionStorage.setItem(NOMBRE_KEY, Nombre);
  }

  public getNombre():string {
    return sessionStorage.getItem(NOMBRE_KEY)!;
  }

  public setApellido(userName:string):void{
    window.sessionStorage.removeItem(APELLIDO_KEY);
    window.sessionStorage.setItem(APELLIDO_KEY, userName);
  }

  public getApellido():string {
    return sessionStorage.getItem(APELLIDO_KEY)!;
  }

  public logOut(): void{
    window.sessionStorage.clear();
  }
  

}
