import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  constructor(private findOne: FindOneService) { }

  user: any;

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res})
  }

  open: Boolean = false

  toggle(){
    this.open = !this.open
  }

}
