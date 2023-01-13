import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private findOne: FindOneService,
              private post: PostService
    ) { }

  user: any

  loading: Boolean = false

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res; this.loading = true;
      this.post.getAllPosts()
      .subscribe(res => {this.filterPost(res);
        this.findOne.getAllProfiles()
        .subscribe(res => this.slice(res))
      })
    })
  }

  filteredPosts: any = []

  filterPost(array: any){
    for(let item of array){
      if(this.user.news.includes(item._id)){
        this.filteredPosts.push(item)
      }
    }
  }

  slice(array: any){
    for(let item of this.filteredPosts){
      for(let item2 of array){
        if(item.owner == item2._id){
          item.img = item2.img
        } else {
          console.log(false)
        }
      }
    }

    console.log(this.filteredPosts)
  }

}
