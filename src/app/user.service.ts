import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http : HttpClient) { }

  getdatosLogin(){
    return this.http.get(' https://randomuser.me/api/?results=10');
  }
  getdatosDashboard(){
    return this.http.get(' https://randomuser.me/api/?results=100');
  }
  getdatosUsuarios(){
    return this.http.get(' https://randomuser.me/api/?results=300');
  }
}
