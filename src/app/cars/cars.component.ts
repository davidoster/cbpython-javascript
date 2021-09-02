import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(public dataService:DataService) {
    console.log('CarsComponent constructor')
  }

  ngOnInit(): void {
    console.log('CarsComponent on init')
    console.log(this.dataService.getCars())
  }
  ngAfterViewInit() {
    console.log('CarsComponent after view init')
  }
  ngOnDestroy() {
    console.log('CarsComponent on destroy')
  }

}
