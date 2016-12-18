import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { PlansScreenComponent } from './plans/plans-screen/plans-screen.component';

import { AuthModule, AuthGuard, AuthService } from './auth/auth.module';

import { AngularFireModule } from 'angularfire2';

import { FirebaseConfig, FirebaseAuthConfig } from './shared/firebase.config';

import { PlansModule } from './plans/plans.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BankAccountsModule,
    HttpModule,
    AuthModule,
    PlansModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(FirebaseConfig, FirebaseAuthConfig),
    RouterModule.forRoot([
      { path: '', component: HomeScreenComponent, canActivate: [AuthGuard] },
      { path: 'home', component: HomeScreenComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginScreenComponent },
      { path: 'plans', component: PlansScreenComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 