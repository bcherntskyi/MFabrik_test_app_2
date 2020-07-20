import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './body/body.component';
import { ManufacturerService } from './services/manufacturer/manufacturer.service';
import { EntityDataService } from '@ngrx/data';
import { ManufacturerDataService } from './store/entity/manufacturer-data.service';

@NgModule({
    declarations: [ BodyComponent ],
    imports: [ CommonModule ],
    providers: [ ManufacturerService, ManufacturerDataService ]
})
export class MainPageModule {
    constructor(entityDataService: EntityDataService, manufacturerDataService: ManufacturerDataService) {
        entityDataService.registerService('Manufacturer', manufacturerDataService);
    }
}
