import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { BodyComponent } from './body.component';
import { AppModule } from '../../../app.module';

describe('BodyComponent', () => {
    let component: BodyComponent;
    let fixture: ComponentFixture<BodyComponent>;
    let httpService: HttpClient;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule, HttpClientTestingModule ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        httpService = TestBed.get(HttpClient);
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
