import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NivelDificultadComponent } from './nivel-dificultad.component';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [
    NivelDificultadComponent
  ],
  imports: [
    CommonModule,
    BadgeModule
  ],
  exports: [NivelDificultadComponent]
})
export class NivelDificultadModule { }
