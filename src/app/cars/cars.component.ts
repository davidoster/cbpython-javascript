import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'brand'];
  dataSource:any[] =[];
  constructor(public dataService:DataService) {
    console.log('CarsComponent constructor')
 
  }

  ngOnInit(): void {
    console.log('CarsComponent on init')
    this.dataSource =this.dataService.getCars();
  }
  ngAfterViewInit() {
  
    console.log('CarsComponent after view init')
  }
  ngOnDestroy() {
    console.log('CarsComponent on destroy')
  }

}
