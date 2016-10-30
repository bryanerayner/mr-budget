import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth-guard';

import { AngularFireModule } from 'angularfire2';

import { FirebaseConfig, FirebaseAuthConfig } from './shared/firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AngularFireModule.initializeApp(FirebaseConfig, FirebaseAuthConfig),
    RouterModule.forRoot([
      { path: '', component: HomeScreenComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
