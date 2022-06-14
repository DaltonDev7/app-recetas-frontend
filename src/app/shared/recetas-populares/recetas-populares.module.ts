import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasPopularesComponent } from './recetas-populares.component';
import { RecetasPopularesRoutingModule } from './recetas-populares-routing.module';



@NgModule({
  declarations: [
    RecetasPopularesComponent
  ],
  imports: [
    CommonModule,
    RecetasPopularesRoutingModule
  ]
})
export class RecetasPopularesModule { }
