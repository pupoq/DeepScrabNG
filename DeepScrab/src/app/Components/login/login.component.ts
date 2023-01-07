import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
  hidden: Boolean = false

  hidden1: Boolean = false
  hidden2: Boolean = false

  loginInp: string = ''
  passwordInp: string = ''

  regLoginInp: string = ''
  regNicknameInp: string = ''
  regPasswordInp: string = ''
  regPasswordInpConfirm: string = ''

  confirm: Boolean = false

  toggleBlock: Boolean = false

  errorAuth: Boolean = false

  lowerCase: any = /[a-z]/g
  upperCase: any = /[A-Z]/g
  numbers: any = /[0-9]/g

  passwordCheck: boolean = false

  user: any;
  error: any;

  message: Boolean = false

  toggle = () => {
    this.hidden = !this.hidden
  }
  toggle1 = () => {
    this.hidden1 = !this.hidden1
  }
  toggle2 = () => {
    this.hidden2 = !this.hidden2
  }
  toggle3 = () => {
    this.toggleBlock = !this.toggleBlock
  }

  login = () => {
    if(this.loginInp.length >= 5 ?? this.passwordInp.length >= 5){
      this.loginService.login(this.loginInp, this.passwordInp)
    .subscribe((res) => {localStorage.setItem('userInfo', JSON.stringify(res))
  location.reload()},
      (error) => {this.error = error.status 
        console.log(this.error)}
      )
    } else {
      this.error = 1
    }
  } 

  onSomeAction(event: any){
    if(event.keyCode===13){
      
    }
   }

  register = () => {
    if(this.regPasswordInp.match(this.lowerCase) && 
    this.regPasswordInp.match(this.upperCase) && 
    this.regPasswordInp.match(this.numbers) && 
    this.regPasswordInp.length >= 6 &&
    this.regPasswordInp == this.regPasswordInpConfirm){
        let object = {
          fullName: this.regNicknameInp, 
          login: this.regLoginInp, 
          password: this.regPasswordInp, 
          img: null, 
          posts: [], 
          birth: '', 
          events: [], 
          followers: [], 
          likes: [], 
          news: []
        }
    
        this.loginService.register(object)
        .subscribe((res) => console.log(res),
          (error) => {this.error = error.status
          console.log(this.error)
        if(this.error == 200){
          this.toggleBlock = false
          this.regLoginInp = ''
          this.regNicknameInp = ''
          this.regPasswordInp = ''
          this.regPasswordInpConfirm = ''
          this.message = true
          setTimeout(() => this.message = false, 2000)
        }}
          )

    } else {
      this.passwordCheck = true
    }
    
  }


}
