import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity({ database: 'MFabrik' })
export class Manufacturer extends BaseEntity{
    @PrimaryColumn()
    id: string;
    
    @Column()
    assetId: string;
    
    @Column()
    name: string;
    
    @Column()
    partnerId: string;
}
