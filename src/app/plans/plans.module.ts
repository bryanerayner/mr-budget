import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PlansComponent } from './plans.component';
import { PlansService } from './plans.service';
import { PlansScreenComponent } from './plans-screen/plans-screen.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { AccountModule } from '../account/account.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AccountModule
  ],
  declarations: [PlansComponent, PlansScreenComponent, PlanDetailsComponent],
  providers: [ PlansService ]
})
export class PlansModule { }
