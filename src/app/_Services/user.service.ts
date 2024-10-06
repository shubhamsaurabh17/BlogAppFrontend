import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_API = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public login(data: any) {
    return this.http.post(this.BASE_API + "login", data);
  }

  public user() {
    return this.http.get(this.BASE_API + "user", { responseType: "text" });
  }

  public admin() {
    return this.http.get(this.BASE_API + "admin", { responseType: "text" })
  }

  public register(data: any) {
    return this.http.post(this.BASE_API + "register", data, { responseType: "text" });
  }

}
