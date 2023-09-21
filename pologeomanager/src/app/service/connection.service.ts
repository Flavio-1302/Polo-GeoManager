import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() { }
Call(){

}
  return this.http.post(
    "http://projectingschool.altervista.org/funcs/login.php"
    ,
    JSON.stringify({

    username: this.loginForm.value.username,
    password: this.loginForm.value.password,

  }))
}
