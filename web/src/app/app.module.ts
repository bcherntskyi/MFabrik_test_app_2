import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from './modules/main-page/main-page.module';
import { environment } from '../environments/environment';
import { API_BASE_DOMAIN } from './url.constants';
import { entityConfig } from './entity-metadata';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: API_BASE_DOMAIN
};

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CoreModule,
        AppRoutingModule,
        MainPageModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig)
    ],
    providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
