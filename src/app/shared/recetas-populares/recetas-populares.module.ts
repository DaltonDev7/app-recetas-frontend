import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasPopularesComponent } from './recetas-populares.component';
import { RecetasPopularesRoutingModule } from './recetas-populares-routing.module';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecetasPopularesComponent
  ],
  imports: [
    CommonModule,
    RecetasPopularesRoutingModule,
    RatingModule,
    FormsModule
  ]
})
export class RecetasPopularesModule { }
