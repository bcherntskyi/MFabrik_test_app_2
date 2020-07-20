import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import * as manufacturers from '@config/mock-data.json';
import { ManufacturerService } from './manufacturer.service';
import { Manufacturer } from '../entities/manufacturer.entity';

describe('ManufacturerService', () => {
    let manufacturerModule: TestingModule;
    let manufacturerService: ManufacturerService;
    
    const repositoryMockFactory: any = jest.fn(() => ({
        find: jest.fn(entity => entity),
    }));
    
    beforeAll(async () => {
        manufacturerModule = await Test.createTestingModule({
            providers: [ManufacturerService, { provide: getRepositoryToken(Manufacturer), useFactory: repositoryMockFactory}]
        }).compile();
    
        manufacturerService = manufacturerModule.get<ManufacturerService>(ManufacturerService);
    });
    
    it('should service defined', () => {
        expect(manufacturerService).toBeDefined();
    });
    
    it('should get manufacturers', async () => {
        expect(manufacturerService.getManufacturers()).toEqual(manufacturers);
    });
});
