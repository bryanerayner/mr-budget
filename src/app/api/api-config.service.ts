import { Injectable } from '@angular/core';

import { IMrBudgetClientConfig } from '@bryanerayner/mr-budget-client';

@Injectable()
export class ApiConfigService {

    constructor(){

    }

    getUrl(path:string){
        return `https://mrbudget.herokuapp.com/${path}`;
    }

    /**
     * Get the configuration of the app.
     */
    getConfig () : IMrBudgetClientConfig {
        return {
            // In the future,
            // this should be able to be configured in the markup of the HTML
            // or in the settings on an Android / iOS app.
            serverUrl: 'https://mrbudget.herokuapp.com'
        };
    }
}