import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';
import { FollowService } from 'src/app/Services/follow.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  constructor(private findOne: FindOneService,
              private follow: FollowService,
              private router: Router
    ) { }

    btn: boolean = true

  user: any;

  defUser: any = localStorage.getItem('userInfo')
  parseUser: any = JSON.parse(this.defUser)
  loading: Boolean = false

  searchText: string = ''

  globalSearch: string = ''

  userArray: any = []

  slicedArray: any = [];

  checkFollowers: Boolean = false

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res; this.loading = !this.loading;
      this.findOne.getAllProfiles()
    .subscribe(res2 => {this.slice(res2)})      
    })
  }

  toFollow(id: string){
    this.follow.follow(this.parseUser._id, id)
    .subscribe(res => {console.log(res)})
  }

  slice(array: any){
    if(this.user.friends.length != 0){
      this.checkFollowers = true
    }
    for(let item of array){
      if(this.user.friends.includes(item._id)){
        this.slicedArray.push(item)
      } else if(!this.user.friends.includes(item._id) && item.login !== this.user.login){
        this.userArray.push(item)
      }
    }
  }

  viewDetail(id: any){
    let url: string = '/friends/' + id
    this.router.navigateByUrl(url)
  }

}
