import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  info: string = "l am info from your father";
  childInfo: string = '';
  constructor() { }
  getInfo($event: any) {
    this.childInfo = $event;
  }
  ngOnInit(): void {
  }

}
