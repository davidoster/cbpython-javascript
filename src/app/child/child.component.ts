import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() info =''
  @Output() newItemEvent = new EventEmitter();
  constructor() { }

send(){
  console.log('child sends info')
  this.newItemEvent.emit("info from child")
}

ngOnInit(): void {
}

}
