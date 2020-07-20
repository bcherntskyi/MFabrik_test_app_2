import { getRepository, MigrationInterface } from 'typeorm';

import * as manufacturers from '@config/mock-data.json';
import { Manufacturer } from '../modules/manufacturer/entities/manufacturer.entity';

export class Manufacturer1595232964776 implements MigrationInterface {
    public async up(): Promise<any> {
        const migrationData: Manufacturer[] = manufacturers.map((manufacturerData: Manufacturer) => {
            const manufacturer: Manufacturer = new Manufacturer();

            manufacturer.assetId = manufacturerData.assetId;
            manufacturer.name = manufacturerData.name;
            manufacturer.partnerId = manufacturerData.partnerId;
            manufacturer.id = manufacturerData.id;

            return manufacturer;
        });
        
        await getRepository(Manufacturer).save(migrationData);
    }

    public async down(): Promise<any> {
        await getRepository(Manufacturer).clear();
    }
}
