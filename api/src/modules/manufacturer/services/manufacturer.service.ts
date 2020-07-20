import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Manufacturer } from '../entities/manufacturer.entity';

@Injectable()
export class ManufacturerService {
    constructor(@InjectRepository(Manufacturer) private manufacturerRepository: Repository<Manufacturer>) { }
    
    async getManufacturers(): Promise<Manufacturer[]> {
        return await this.manufacturerRepository.find();
    }
}
