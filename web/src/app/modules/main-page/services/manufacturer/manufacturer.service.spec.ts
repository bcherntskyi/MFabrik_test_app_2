import { TestBed } from '@angular/core/testing';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { ManufacturerService } from './manufacturer.service';

describe('ManufacturerService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [ManufacturerService, EntityCollectionServiceElementsFactory]
    }));

    it('should be created', () => {
        const service: ManufacturerService = TestBed.get(ManufacturerService);

        expect(service).toBeDefined();
    });
});
