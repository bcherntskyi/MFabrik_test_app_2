import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ManufacturerModule } from './modules/manufacturer/manufacturer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ManufacturerModule]
})
export class AppModule {}
