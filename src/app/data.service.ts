import { Injectable } from '@angular/core';
import { Car } from './entities/Car';

@Injectable({
  providedIn: 'root'
})
export class DataService {

_data:string =''

get data(){
  return this._data
}
set data(dt){
   this._data = dt
}
  constructor() { }

getCars():Car[]{
  return [{brand:"Honda",id:1},{brand:"mazda",id:2},{brand:"nissan",id:3}]
}


}
