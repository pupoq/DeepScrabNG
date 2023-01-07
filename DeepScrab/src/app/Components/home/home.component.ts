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
  posts: any = [];

  preArr: any = []

  
  loading: Boolean = false
  postsLoading: Boolean = false

  message: string = 'Message'
  messageBlock: boolean = false 

  postText: string = '';
  image: string = '';

  check: Boolean = false
  arrCount: number = 0

  async ngOnInit(){
     this.findOne.getProfile()
    .subscribe(res => {this.user = res; this.loading = !this.loading})
    this.post.findAllMyPosts()
    .subscribe(res => {this.reverse(res)})
  }



  getFile($event: any){
    if($event.target.files){
      let reader = new FileReader()
      reader.readAsDataURL($event.target.files[0])
      reader.onload=(event:any)=> {
        this.image = event.target.result
        console.log(event.target.result)
      }
    }
  }

  newPost = () => {
    this.postsLoading = false
    if(this.postText.length >= 1){
      let currentDate = new Date()
      let day = currentDate.getDate()
      let month = currentDate.getMonth() + 1
      let year = currentDate.getFullYear()
      let createdAt = `${day}/${month}/${year}`

      let object = {
        owner: this.user._id,
        fullName: this.user.fullName,
        createdAt: createdAt,
        description: this.postText,
        img: this.image
      }
        this.post.post(object)
        .subscribe(res => {console.log(res); 
          this.post.findAllMyPosts()
          .subscribe(res => {this.reverse(res)})
            this.messageBlock = true
            this.message = 'Post added'
            setTimeout(() => this.messageBlock = false, 3000)
        }
        )
    }

    this.postText = ''
  }

  reverse = (array: any) => {
    let count = array.reverse()
    this.posts = []
      for(let i = 0; i < count.length; i++){
        this.posts.push(count[i])
      }
    this.postsLoading = true
  }

  deleteItem = (id: any, index: any) => {
    this.post.deleteOne(id)
    .subscribe(res => {
      this.post.findAllMyPosts()
      .subscribe(res => {this.reverse(res)})
      this.messageBlock = true
      this.message = 'Post deleted'
      setTimeout(() => this.messageBlock = false, 3000)
    }
    )
  }

}
