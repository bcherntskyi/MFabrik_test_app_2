import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Manufacturer: {}
};

const pluralNames = { Manufacturer: 'Manufacturer' };

export const entityConfig = {
    entityMetadata,
    pluralNames
};
