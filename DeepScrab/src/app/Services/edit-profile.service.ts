import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(public _http: HttpClient) { }

  changeImg = (obj: any) => {
    return this._http.put('http://localhost:8080/users/ava', obj)
  }
}
