import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecetasPopularesComponent } from './recetas-populares.component';

const routes: Routes = [
  {
    path: '',
    component: RecetasPopularesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RecetasPopularesRoutingModule { }
