import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindOneService {

  constructor(public _http: HttpClient) { }

  user: any = localStorage.getItem('userInfo')

  getProfile = () => {
    let myProfile = JSON.parse(this.user)
    return this._http.get(`http://localhost:8080/users/${myProfile._id}`)
  }

  getAllProfiles = () => {
    return this._http.get('http://localhost:8080/users')
  }
}
