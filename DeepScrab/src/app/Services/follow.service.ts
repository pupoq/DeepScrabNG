import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(public _http: HttpClient) { }

  follow(ownerId: string, followingId: string){
    return this._http.post('http://localhost:8080/users/follow', {ownerId, followingId})
  }

  accept(id: string, myId: string){
    return this._http.post('http://localhost:8080/users/accept', {id, myId})
  }
}
