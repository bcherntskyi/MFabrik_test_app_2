import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Manufacturer } from './entities/manufacturer.entity';
import { ManufacturerService } from './services/manufacturer.service';
import { ManufacturerController } from './controllers/manufacturer.controller';

@Module({
    imports: [ TypeOrmModule.forFeature([Manufacturer]) ],
    providers: [ ManufacturerService ],
    controllers: [ ManufacturerController ]
})
export class ManufacturerModule {}
