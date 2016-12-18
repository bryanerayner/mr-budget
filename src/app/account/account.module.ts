import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { ApiModule } from '../api/api.module';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';

export {
  AuthModule
} from '../auth/auth.module';

export {
  AccountService
} from './account.service';

export {
  AccountFeaturesGuard
} from './account-features.guard';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    ApiModule
  ],
  declarations: [ AccountComponent ],
  providers: [ AccountService, AccountFeaturesGuard ]
})
export class AccountModule { }
