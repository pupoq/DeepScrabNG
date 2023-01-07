import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public _http: HttpClient) { }
 
  post = (object: any) => {
   return this._http.post('http://localhost:8080/posts', object)
  }

  user: any = localStorage.getItem('userInfo')

  findAllMyPosts = () => {
    let myProfile = JSON.parse(this.user)
    return this._http.get(`http://localhost:8080/posts/${myProfile._id}`)
  }

  deleteOne = (id: any) => {
    return this._http.delete(`http://localhost:8080/posts/delete/${id}`)
  }
}
