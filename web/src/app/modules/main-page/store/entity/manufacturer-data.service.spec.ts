import { TestBed } from '@angular/core/testing';

import { ManufacturerDataService } from './manufacturer-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';

describe('ManufacturerDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ManufacturerDataService, HttpUrlGenerator, DefaultDataServiceConfig]
    }));

    it('should be created', () => {
        const service: ManufacturerDataService = TestBed.get(ManufacturerDataService);

        expect(service).toBeDefined();
    });
});
