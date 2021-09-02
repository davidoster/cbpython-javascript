import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(public dataService:DataService) {
    console.log('PeopleComponent constructor')
  }

  setData(){
    this.dataService.data = "l am an info from people"
  }
  ngOnInit(): void {
    console.log('PeopleComponent on init')
  }
  ngAfterViewInit() {
    console.log('PeopleComponent after view init')
  }
  ngOnDestroy() {
    console.log('PeopleComponent on destroy')
  }

}
