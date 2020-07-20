import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Manufacturer } from '../../model/manufacturer';

@Injectable()
export class ManufacturerDataService extends DefaultDataService<Manufacturer> {
    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        defaultDataServiceConfig: DefaultDataServiceConfig
    ) {
        super('Manufacturer', http, httpUrlGenerator, defaultDataServiceConfig);
    }

    getAll(): Observable<Manufacturer[]> {
        return super.getAll().pipe(map((response: any) => response.data ? response.data : response));
    }
}
