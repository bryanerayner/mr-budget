import { Component, OnDestroy } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.module';
import { redirectToLoginWhenLoggedOut } from './login-screen/login-helpers';


import * as hammerjs from 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Mr Budget';

  userName: string = '';

  userImg: string ='';

  isLoggedIn: boolean = false;

  private _subscriptions: Array<{unsubscribe:()=>void;}>;

  constructor(
    public af: AngularFire,
    private auth: AuthService,
    private rt: Router
  ) {
    this._subscriptions = [
      auth.auth$.subscribe((authState)=>{
        this.setUserName(authState);
      }),
      auth.isLoggedIn$.subscribe((isLoggedIn)=>{
        this.isLoggedIn = isLoggedIn;
      })
    ];
    redirectToLoginWhenLoggedOut(auth.isLoggedOut$, rt);
  }

  private setUserName(authState: FirebaseAuthState) {
    if (authState) {
      this.userName = authState.auth.displayName;
      this.userImg = authState.auth.photoURL;
    }else{
      this.userName = '';
      this.userImg = '';
    }
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy(){
    this._subscriptions.forEach((s)=>s.unsubscribe());
  }

}
