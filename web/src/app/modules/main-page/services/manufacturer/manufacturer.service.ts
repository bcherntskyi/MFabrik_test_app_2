import { Injectable } from '@angular/core';

import { Manufacturer } from '../../model/manufacturer';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class ManufacturerService extends EntityCollectionServiceBase<Manufacturer> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Manufacturer', serviceElementsFactory);
    }
}
