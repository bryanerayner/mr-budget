
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {
    HttpInterface
} from '@bryanerayner/mr-budget-client';

/**
 * This class provides an interface to the Angular HTTP code,
 * allowing Mr-Budget clients to operate.
 */
@Injectable()
export class HttpInterfaceService implements HttpInterface {

    constructor(private http: Http){

    }

    post<T>(url:string, payload: any): Promise<T> {
        return this.http.post(url, payload).toPromise();
    }
}