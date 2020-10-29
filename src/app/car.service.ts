import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { CARS } from './moc-car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(){}
  
  GetCars():Car[]{
    return CARS;
  }
}
