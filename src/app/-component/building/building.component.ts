import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Building } from '../../-class/building';
//import { xyarea } from '../../-class/xyarea';

// import {BuildingService} from '../../-services/building.service';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  selectedBuilding: Building;
  listOfBuildings: Building[];
  //space: xyarea;

  // constructor(private buildingservice: BuildingService, private router: Router) {
    constructor() {
      

   }

  ngOnInit() {
    // this.getListofBuildings();
  }

  
  // getListofBuildings(): void{
  //   this.buildingservice.getAllBuildings().then(buildings => this.listOfBuildings = buildings);
  //   console.log(this.listOfBuildings);
  // }

  // onSelect(building:Building): void{
  //   this.selectedBuilding = building;
  // }

  
  // gotoDetail(): void{
  //     this.router.navigate(['/buildingdetail', this.selectedBuilding.id]);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.buildingservice.create(name)
  //     .then(building => {
  //       this.listOfBuildings.push(building);
  //       this.selectedBuilding = null;
  //     });
  // }

  // delete(building: Building): void {
  //   this.buildingservice
  //       .delete(building.id)
  //       .then(() => {
  //         this.listOfBuildings = this.listOfBuildings.filter(p => p !== building);
  //         if (this.selectedBuilding === building) { this.selectedBuilding = null; }
  //       });
  // }


}
