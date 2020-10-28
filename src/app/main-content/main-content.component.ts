import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CARS } from '../moc-car';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public searchCar="";

  public cardDetails="none";
  
  public cardStyle={
    width:"18rem",
    height:"250px",
    padding:"10px"
  };

  public name="";
  cars:Car[]=CARS;
  constructor() { }
  
  ngOnInit(): void {
  }
  showDetails():void{
    if(this.cardDetails=="none"){
      this.cardStyle.height="500px";
      this.cardDetails="inline"
    }
    else{
      this.cardStyle.height="250px";
      this.cardDetails="none"
    }

  }

}
