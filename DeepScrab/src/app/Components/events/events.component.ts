import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';
import { FollowService } from 'src/app/Services/follow.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private findOne: FindOneService,
    private follow: FollowService) { }

  user: any

  loading: boolean = false

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res, this.loading = true,
    console.log(this.user.events)})
  }

  accept(id: string){
    this.follow.accept(id, this.user._id)
    .subscribe(res => console.log(res))
  }

}
