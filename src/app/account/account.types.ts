import { Plan } from '../shared/mr-budget.types';

export interface UserAccount {

    /**
     * The canonical ID of the users' account. This is specific to Mr-Budget.
     */
    id: string;

    

    /**
     * The current plans that the user has signed up for.
     */
    currentPlans: Plan[];
}