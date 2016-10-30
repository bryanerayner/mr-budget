import { Injectable } from '@angular/core';
import { FirebaseAuthConfig, AuthConfigGoogle, AuthConfigFacebook } from '../shared/firebase.config';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class AuthService {

  constructor(private af: AngularFire) {
    this._setup(af);
  }

  private _setup(af: AngularFire) {
    
    let auth$ = this.auth$ = new BehaviorSubject<FirebaseAuthState>(null);
    let isLoggedIn$ = this.isLoggedIn$ = new BehaviorSubject<boolean>(false);
    let isLoggedOut$ = this.isLoggedOut$ = new BehaviorSubject<boolean>(true);
    let _auth$ = this._auth$ = af.auth.asObservable();
    af.auth.subscribe((authState: FirebaseAuthState) => {
      this._account = authState;
      auth$.next(authState);
    });

    auth$.subscribe((state) => {
      isLoggedIn$.next(!!state);
      isLoggedOut$.next(!state);
    });

    this._ready = new Promise((resolve)=>{
      _auth$.take(1).subscribe(()=>{
        resolve(true);
      });
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  getAccount() {
    return this._ready.then(()=>{
      return this._account;
    });
  }


  loginGoogle() {
    return new Promise((resolve, reject) => {
      if (!this._account || !this._account.google) {
        this._auth$.take(1).toPromise().then(() => {
          resolve(this._account);
        }, reject);
        this.af.auth.login(AuthConfigGoogle);
      } else {
        resolve(this._account);
      }
    });
  }

  loginFb() {
    return new Promise((resolve, reject) => {
      if (!this._account || !this._account.facebook) {
        this._auth$.take(1).toPromise().then(() => {
          resolve(this._account);
        }, reject);
        this.af.auth.login(AuthConfigFacebook);
      } else {
        resolve(this._account);
      }
    });
  }

  private _ready: Promise<boolean>;

  private _account: FirebaseAuthState = null;

  private _auth$: Observable<FirebaseAuthState>;
  auth$: BehaviorSubject<FirebaseAuthState>;

  isLoggedIn$: BehaviorSubject<boolean>;

  isLoggedOut$:BehaviorSubject<boolean>;
}

