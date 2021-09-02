import { Injectable } from '@angular/core';

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
}
