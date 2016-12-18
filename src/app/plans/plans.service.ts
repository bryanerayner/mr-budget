import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiConfig } from '../shared/api.config';
import { Plan } from '../shared/mr-budget.types';
import { Observable } from 'rxjs';

@Injectable()
export class PlansService {

  constructor(public http: Http,
    public api: ApiConfig) {
  }

  getAllPlans(): Observable<Plan[]> {
    return this.http
      .get(this.api.getUrl('plans'))
      .map(r => this.process(r))
      .catch(this.handleError);
  }

  private process(res: Response): Plan[] {
      let body: Plan[] = res.json();
      return body || [];
  }

  handleError(error: Response | any){
    return Observable.throw(error);
  }
}
