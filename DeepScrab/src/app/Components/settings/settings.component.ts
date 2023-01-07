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

  ngOnInit(): void {
    this.findOne.getProfile()
    .subscribe(res => {this.user = res; this.loading = !this.loading})
  }

  image: any;

  getFile($event: any){
    if($event.target.files){
      let reader = new FileReader()
      reader.readAsDataURL($event.target.files[0])
      reader.onload=(event:any)=> {
        this.image = event.target.result
      }
    }
  }

  editAva(){
    this.loading = false
    let obj = {
      id: this.user._id,
      img: this.image
    }

    this.editProfile.changeImg(obj)
    .subscribe((res) => {if(res){
      location.reload()
    }})
  }


}
