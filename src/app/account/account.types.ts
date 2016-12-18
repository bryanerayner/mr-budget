import { Plan } from '../shared/mr-budget.types';

export interface UserAccount {

    /**
     * The Firebase uid for the user account. This is the canonical ID for the users account.
     */
    uid: string;


    /**
     * The current plans that the user has signed up for.
     */
    currentPlans: Plan[];
}