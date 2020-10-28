import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CARS } from '../moc-car';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  cars:Car[]=CARS;
  constructor() { }

  ngOnInit(): void {
  }

}
