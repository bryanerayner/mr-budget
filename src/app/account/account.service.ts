import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserAccount } from './account.types';

import {
    AccountsClient
} from '@bryanerayner/mr-budget-accounts-client';

import {
    HttpInterfaceService
} from '../api/http-interface.service';

import {
    ApiConfigService
} from '../api/api-config.service';

/**
 * The account service is used to interact with all plans of the 
 */
@Injectable()
export class AccountService {

    constructor(
        private iHttp: HttpInterfaceService,
        private apiConfig: ApiConfigService
        ) {
        this._currentUser$ = new BehaviorSubject<UserAccount>(null);
        const currentUser$ = this.currentUser$ = this._currentUser$.asObservable();

        const accounts = this.accounts = new AccountsClient(iHttp, apiConfig.getConfig());

        this._setupPayments();
    }

    private _setupPayments() {
        let {
            currentUser$,
            accounts
        } = this;

        // Always ensure that there's a Stripe Customer object
        // available for this user.
        let hasStripeAccount$ = currentUser$
            .filter(v=>!!v)
            .map(v=>v.uid)
            .distinctUntilChanged()
            .switchMap(v=>accounts.connectPayments(v));

        const currentUserHasPaymentsAccount$ = new BehaviorSubject<boolean>(false);
        hasStripeAccount$.subscribe(currentUserHasPaymentsAccount$);

        this.currentUserHasPaymentsAccount$ = currentUserHasPaymentsAccount$.asObservable();
    }

    private accounts: AccountsClient;

    /**
     * The current users' account
     */
    private _currentUser$: BehaviorSubject<UserAccount>;

    /**
     * The current users' account
     */
    currentUser$: Observable<UserAccount>;

    /**
     * Whether or not the user has a payments account created by the system.
     */
    private currentUserHasPaymentsAccount$: Observable<boolean>;
}