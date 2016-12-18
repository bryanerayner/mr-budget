import { AccountFeaturesGuard } from './account-features.guard';
import { OpaqueToken } from '@angular/core';
import { AppFeatureNames } from '../app-features/app-features.types';

import {
    AuthService
} from '../auth/auth.module';

let accountFeaturesGuardFactory = (auth: AuthService, requireFeatures) => {
  return new AccountFeaturesGuard(auth, requireFeatures);
};

function accountFeatureGuard(appFeatureName: AppFeatureNames) : OpaqueToken {
    return new OpaqueToken(`MR_BUDGET_ACCOUNT_FEATURE_GUARD-${appFeatureName}`);
}



export let accountFeaturesGuardProvider =   { 
    provide: AccountFeaturesGuard,
    useFactory: accountFeaturesGuardFactory,
    deps: [AuthService]
};



/**
 * Retrieve account feature guards which only allow routes to be activated if 
 * a given app feature is enabled on the users' account.
 */
export function accountFeatureGuardFor(...appFeature: AppFeatureNames[]) : OpaqueToken[] {
    return appFeature.map(accountFeatureGuard)
}