import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public searchCar="";
  public selectedCar:Car;


  public name="";
  cars:Car[];
  constructor(private carService:CarService, private messageService:MessageService) { }
  
  ngOnInit(): void {
    this.cars=this.carService.GetCars();
  }
  showDetails(car:Car):void{
   this.selectedCar=car;

  }
  addMessage():void{
    this.messageService.add("Poruka generisana");
    console.log("Messages:",this.messageService.messages);
  }  

  clear(){
    this.messageService.celar();
  }

}
