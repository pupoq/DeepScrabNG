import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public _http: HttpClient) { }

  login = (login: string, password: string) => {
    return this._http.post('http://localhost:8080/users/login', {
      login: login, password: password 
    })
  }

  register = (object: any) => {
    return this._http.post('http://localhost:8080/users', object)
  }
}
