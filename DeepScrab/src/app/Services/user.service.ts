import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http: HttpClient) { }

  getProfile = (id: any) => {
    return this._http.get(`http://localhost:8080/users/${id}`)
  }
}
