import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserAccount } from './account.types';

/**
 * The account service is used to interact with all plans of the 
 */
@Injectable()
export class AccountService {

    constructor() {
        this._currentUser$ = new BehaviorSubject<UserAccount>(null );
        this.currentUser$ = this._currentUser$.asObservable();
    }

    /**
     * The current users' account
     */
    private _currentUser$: BehaviorSubject<UserAccount>;

    /**
     * The current users' account
     */
    currentUser$: Observable<UserAccount>;
}