import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './-services/in-memory-data.service';

import { AppRoutingModule } from './app.routing';
import { provideRoutes, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BuildingComponent } from './-component/building/building.component';
import { ConstructionComponent } from './-component/construction/construction.component';
import { HousingComponent } from './-component/housing/housing.component';


import { BuildingService } from './-services/building.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    ConstructionComponent,
    HousingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
