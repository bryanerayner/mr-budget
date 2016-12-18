import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    HttpInterfaceService
} from './http-interface.service';

import {
    ApiConfigService
} from './api-config.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        HttpInterfaceService,
        ApiConfigService
    ]
})
export class ApiModule {
};