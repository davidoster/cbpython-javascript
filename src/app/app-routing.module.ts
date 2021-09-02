import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
{path:'cars',component:CarsComponent},
{path:'people',component:PeopleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
