import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  constructor(private findOne: FindOneService) { }

  userDefaultInfo: any = localStorage.getItem('userInfo')
  parseUserInfo: any = JSON.parse(this.userDefaultInfo)
  user: any;

  loading: Boolean = false

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res; this.loading = !this.loading})
  }

  open: Boolean = false

  toggle(){
    this.open = !this.open
  }

  logOut(){
    localStorage.removeItem('userInfo')
    location.reload()
  }

}
