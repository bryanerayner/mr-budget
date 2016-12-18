import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BankAccountsScreenComponent } from './bank-accounts-screen/bank-accounts-screen.component';
import { AccountModule, AppFeaturesGuard } from '../account/account.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      { path: 'bank-accounts', component: [ BankAccountsScreenComponent ], canActivate: [ ] }
    )
  ],
  declarations: [BankAccountsScreenComponent]
})
export class BankAccountsModule { }
