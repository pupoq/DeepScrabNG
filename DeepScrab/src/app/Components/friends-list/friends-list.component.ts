import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  constructor(private findOne: FindOneService) { }

  user: any;

  defUser: any = localStorage.getItem('userInfo')
  parseUser: any = JSON.parse(this.defUser)
  loading: Boolean = false

  searchText: string = ''

  userArray: any;

  slicedArray: any = [];

  checkFollowers: Boolean = false

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res})
    this.findOne.getAllProfiles()
    .subscribe(res => {this.userArray = res; 
      this.loading = true; 
      console.log(res);
    this.slice()})
  }

  slice(){
    for(let item of this.userArray){
      if(item.login !== this.parseUser.login){
        this.slicedArray.push(item)
      }
    }
    if(this.user.followers.length == 0){
      this.checkFollowers = true
    }
    console.log(this.slicedArray)
  }

}
