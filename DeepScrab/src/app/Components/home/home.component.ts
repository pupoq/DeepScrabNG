import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private findOne: FindOneService,
              private post: PostService
    ) { }

  user: any;
  posts: any;

  postText: string = '';
  image: string = '';

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res})
    this.post.findAllMyPosts()
    .subscribe(res => {this.posts = res})
  }

  getFile($event: any){
    if($event.target.files){
      let reader = new FileReader()
      reader.readAsDataURL($event.target.files[0])
      console.log(reader)
      reader.onload=(event:any)=> {
        this.image = event.target.result
      }
    }
 
  }

  show = () => {
    if(this.postText.length >= 1){
      let object = {
        owner: this.user._id,
        description: this.postText,
        img: this.image
      }
        this.post.post(object)
        .subscribe(res => console.log(res))
    } else {
    }
  }

}
