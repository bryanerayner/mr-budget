import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Plan } from '../../shared/mr-budget.types';


/**
 * Describes the details of a plan.
 */
@Component({
  selector: 'mr-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit, OnChanges {

  /**
   * The plan to show 
   */
  @Input() plan: Plan;
  
  /**
   * The plan that the current user has
   */
  @Input() usersPlans: Plan[];

  /**
   * When the "sign up" button has been clicked.
   */
  @Output() signUpClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let {
      plan,
      usersPlans
    } = changes;

    if (usersPlans || plan) {
      this._updateCanShowSignUp();
    }
  }

  clickSignUp() {
    this.signUpClicked.emit(true);
  }

  private _updateCanShowSignUp() {
    let {
      plan,
      usersPlans
    } = this;
    let canShowSignUp = false;

    if (plan) {
      canShowSignUp = true;
      if (usersPlans && 
          usersPlans.some(usersPlan=>plan.name === usersPlan.name)) {
          canShowSignUp = false;
      }
    }
    this.canShowSignUp = canShowSignUp; 
  }

  /**
   * Whether or not the sign up button should be shown
   */
  protected canShowSignUp: boolean = true;
}
