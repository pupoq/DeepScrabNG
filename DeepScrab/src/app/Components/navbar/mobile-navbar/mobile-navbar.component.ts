import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';
@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  constructor(private findOne: FindOneService) { }

  user: any;

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res;})
  }

  logOut(){
    localStorage.removeItem('userInfo')
    location.reload()
  }

}
