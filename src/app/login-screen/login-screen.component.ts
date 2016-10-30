import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private rt: Router
  ) { 

  }

  ngOnInit() {
    this.auth.isLoggedIn$.subscribe((isLoggedIn)=>{
      if (isLoggedIn) {
        this.goHome();
      }
    });
  }

  goHome(){
    this.rt.navigateByUrl('home');
  }

  google(){
    this.navHome(this.auth.loginGoogle());
  }

  facebook(){
    this.navHome(this.auth.loginFb());
  }

  navHome(promise: PromiseLike<any>){
    promise.then(()=>this.goHome());
  }

}
