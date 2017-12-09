import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingComponent  } from './-component/building/building.component';
import { ConstructionComponent } from './-component/construction/construction.component';
import { HousingComponent } from './-component/housing/housing.component';
import { HomeComponent } from './-component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
   { path: 'building', component: BuildingComponent  },
   { path: 'construction', component: ConstructionComponent},
   { path: 'housing',     component: HousingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}