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

  changeSex = (obj: any) => {
    return this._http.put('http://localhost:8080/users/sex', obj)
  }

  changeFullname = (obj: any) => {
    return this._http.put('http://localhost:8080/users/fullname', obj)
  }
  changeDescr = (obj: any) => {
    return this._http.put('http://localhost:8080/users/description', obj)
  }
  
  avatars =  [
    {id: 1, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307794.png'},
    {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307820.png'},
    {id: 3, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307817.png'},
    {id: 4, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307775.png'},
    {id: 5, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307791.png'},
    {id: 6, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307744.png'},
    {id: 7, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307754.png'},
    {id: 8, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307788.png'},
    {id: 9, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307766.png'},
    {id: 10, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307767.png'},
    {id: 11, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307756.png'},
    {id: 12, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307764.png'},
    {id: 13, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307800.png'},
    {id: 14, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307782.png'},
    {id: 15, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307785.png'},
    {id: 16, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307773.png'},
    {id: 17, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307763.png'},
    {id: 18, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307762.png'},
    {id: 19, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307797.png'},
    {id: 20, src: 'https://cdn-icons-png.flaticon.com/512/9307/9307742.png'},
]

}
