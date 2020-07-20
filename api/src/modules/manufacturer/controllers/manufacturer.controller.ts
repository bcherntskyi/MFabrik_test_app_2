import { Controller, Get } from '@nestjs/common';

import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../entities/manufacturer.entity';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private readonly manufacturerService: ManufacturerService) {}
    
    @Get()
    getAllManufacturers(): Promise<Manufacturer[]> {
        return this.manufacturerService.getManufacturers();
    }
}
