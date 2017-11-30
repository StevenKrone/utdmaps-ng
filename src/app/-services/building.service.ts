import { Injectable } from '@angular/core';

import {Building} from '../-class/building';
//import {TRIBES} from '../_mockdatafiles/mock-buildings';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class BuildingService {

  private buildingUrl = 'api/buildings';
  constructor(private http: Http){}


    // getAllBuildings(): Promise<Building[]>{
    //   return Promise.resolve(TRIBES);  
    // }

  getAllBuildings(): Promise<Building[]>{
        return this.http.get(this.buildingUrl)
        .toPromise()
        .then(response => response.json().data as Building[])
        .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getBuilding(id: number): Promise<Building>{
    const url = `${this.buildingUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Building)
        .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});



  update(building: Building): Promise<Building> {
    const url = `${this.buildingUrl}/${building.id}`;
    return this.http
        .put(url, JSON.stringify(building), {headers: this.headers})
        .toPromise()
        .then(() => building)
        .catch(this.handleError);
    }

    create(name: string): Promise<Building> {
        return this.http
            .post(this.buildingUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Building)
            .catch(this.handleError);
        }

    delete(id: number): Promise<void> {
        const url = `${this.buildingUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        }


}
