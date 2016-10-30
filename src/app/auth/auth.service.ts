import { Injectable } from '@angular/core';
import { FirebaseAuthConfig } from '../shared/firebase.config';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {

  constructor(private af: AngularFire) {
    let auth$ = this.auth$ = new BehaviorSubject<FirebaseAuthState>(null);
    let isLoggedIn$ = this.isLoggedIn$ = new BehaviorSubject<boolean>(false);
    af.auth.subscribe((authState: FirebaseAuthState)=>{
      auth$.next(authState);
    });

    auth$.subscribe((state)=>{
      isLoggedIn$.next(!!state);
    });
  }

  login() {
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
  }
  
  auth$: BehaviorSubject<FirebaseAuthState>;

  isLoggedIn$: BehaviorSubject<boolean>;
}
