import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { CarsComponent } from './cars/cars.component';
import { PeopleComponent } from './people/people.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent,
    SiblingComponent,
    CarsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule ,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
