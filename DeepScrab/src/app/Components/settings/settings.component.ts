import { Component, OnInit } from '@angular/core';
import { FindOneService } from 'src/app/Services/find-one.service';
import { EditProfileService } from 'src/app/Services/edit-profile.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private findOne: FindOneService,
              private editProfile: EditProfileService
    ) { }

  user: any;

  loading: Boolean = false

  avatarsArray: any = this.editProfile.avatars

  checkName: boolean = false
  checkDescr: boolean = false
  checkSex: boolean = false

  newFullname: string = ''
  newDescription: string = ''
  newSex: boolean = false

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res; this.loading = !this.loading})
  }

  avatarsActive: boolean = false

  newAva: string = ''

  toggle(){
    this.avatarsActive = !this.avatarsActive
  }


  confirmNewAva(src: string){
    this.newAva = src
  }

  // getFile($event: any){
  //   if($event.target.files){
  //     let reader = new FileReader()
  //     reader.readAsDataURL($event.target.files[0])
  //     reader.onload=(event:any)=> {
  //       this.image = event.target.result
  //     }
  //   }
  // }

  editAva(){
    this.loading = false
    let obj = {
      id: this.user._id,
      img: this.newAva
    }

    this.editProfile.changeImg(obj)
    .subscribe((res) => {if(res){
      this.newAva = ''
      location.reload()
    }})
  }

  editSex(){
    let obj = {
      id: this.user._id,
      sex: this.newSex
    }
    this.editProfile.changeSex(obj)
    .subscribe(res => {console.log(res), location.reload()})
  }

  editFullname(){
    let obj = {
      id: this.user._id,
      fullName: this.newFullname
    }
    this.editProfile.changeFullname(obj)
    .subscribe(res => {console.log(res), location.reload()})
  }

  editDescr(){
    let obj = {
      id: this.user._id,
      description: this.newDescription
    }
    this.editProfile.changeDescr(obj)
    .subscribe(res => {console.log(res), location.reload()})
  }

}
