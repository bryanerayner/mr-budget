import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppFeatureNames } from '../app-features/app-features.types';

import {
    AuthService
} from '../auth/auth.module';

/**
 * This route guard permits only certain features to be used. 
 */
@Injectable()
export class AccountFeaturesGuard implements CanActivate {

    constructor(private auth: AuthService,
                private requiredFeatures: AppFeatureNames) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }
}