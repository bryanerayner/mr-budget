import { Component, OnInit } from '@angular/core';
import { PlansService } from '../plans.service';
import { AccountService } from '../../account/account.module';
import { Plan } from '../../shared/mr-budget.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'mr-plans-screen',
  templateUrl: './plans-screen.component.html',
  styleUrls: ['./plans-screen.component.css']
})
export class PlansScreenComponent implements OnInit {

  protected plans: Observable<Plan[]>;

  protected currentUserPlans: Observable<Plan[]>;

  constructor(private _service: PlansService,
              private _accounts: AccountService) {
                this.currentUserPlans = _accounts.currentUser$.map(v=>v ? v.currentPlans : null);
              }

  ngOnInit() {
    this.plans = this._service.getAllPlans();
  }

  /**
   * Sign the current user up for a plan
   */
  signUserUp(plan: Plan) {
    console.log('sign up user');
  }
}
