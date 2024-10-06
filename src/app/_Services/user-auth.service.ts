import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setToken(token:any){
    localStorage.setItem("token",token);
  }

  public getToken(){
    return localStorage.getItem("token")
  }

  public setRoles(roles: []): void {
    localStorage.setItem("roles", JSON.stringify(roles));
  }
  
  public getRoles(): any {
    const roles = localStorage.getItem("roles");
    return roles ? JSON.parse(roles) : null;
  }
  

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getToken() && this.getRoles()
  }
}
