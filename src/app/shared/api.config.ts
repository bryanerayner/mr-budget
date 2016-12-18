import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfig {

    constructor(){

    }

    getUrl(path:string){
        return `https://mrbudget.herokuapp.com/${path}`;
    }
}