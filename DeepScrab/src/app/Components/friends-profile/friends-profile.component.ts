import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { FindOneService } from 'src/app/Services/find-one.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.component.html',
  styleUrls: ['./friends-profile.component.css']
})
export class FriendsProfileComponent implements OnInit {

  user: any
  courseId: any
  constructor(private activatedRoute: ActivatedRoute,
              private service: UserService,
              private findOne: FindOneService,
              private router: Router,
              private post: PostService
    ) { }

    loading: boolean = false

    arrayFriends: any = []

    postsLoading: boolean = false

    posts: any = []

    localUser: any = localStorage.getItem('userInfo')

    parsedUser: any = JSON.parse(this.localUser)
  ngOnInit(): void {
    this.func()
  }

  func(){
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id')
    if(this.courseId !== this.parsedUser._id){
      this.service.getProfile(this.courseId)
    .subscribe(res => {this.user = res; this.loading = true;
      this.findOne.getAllProfiles()
      .subscribe(res2 => {this.filterFriends(res2);
        this.post.findAllFriendsPost(this.user._id)
          .subscribe(res => {this.reverse(res)})
      }) })
    } else {
      let url: string = ''
      this.router.navigateByUrl(url)
    }
  }

  filterFriends(array: any){
    for(let item of array){
      if(this.user.friends.includes(item._id)){
        this.arrayFriends.push(item)
      }
    }
  }

  reverse = (array: any) => {
    let count = array.reverse()
    this.posts = []
      for(let i = 0; i < count.length; i++){
        this.posts.push(count[i])
      }
      this.postsLoading = true
  }

  viewDetail(id: any){
    this.posts = []
    this.loading = false
    this.postsLoading = false
    let url: string = '/friends/' + id
    this.router.navigateByUrl(url)
    this.user = null
    this.courseId = null
    this.arrayFriends = []
    setTimeout(() => {this.func()}, 500)
  }

}
