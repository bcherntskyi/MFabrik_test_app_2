import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Manufacturer } from '../model/manufacturer';
import { ManufacturerService } from '../services/manufacturer/manufacturer.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
    manufacturers$: Observable<Manufacturer[]> = this.manufacturerService.entities$;

    constructor(private readonly manufacturerService: ManufacturerService) {}

    ngOnInit(): void {
        this.manufacturerService.getAll();
    }

    trackByIndex(index: number): number {
        return index;
    }
}
