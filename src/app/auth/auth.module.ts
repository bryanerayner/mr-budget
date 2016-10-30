import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

export {
  AuthGuard,
  AuthService
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
