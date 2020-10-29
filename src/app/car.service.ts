import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { CARS } from './moc-car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(){}
  
  GetCars(searchWord:string):Car[]{
    var filteredList:Car[]=[];
    if(searchWord=="")
    {
      return CARS;

    }
    else{
      CARS.filter((c:Car)=>{
        if(c.name.toLowerCase().startsWith(searchWord.toLowerCase())){
          filteredList.push(c);
        }

      });
      return filteredList;
    }

  }
}
