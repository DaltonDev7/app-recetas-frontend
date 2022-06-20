import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditusuarioComponent } from './editusuario.component';
import { EditusuarioRoutingModule } from './editusuario-routing.module';



@NgModule({
  declarations: [
    EditusuarioComponent
  ],
  imports: [
    CommonModule,
    EditusuarioRoutingModule
  ]
})
export class EditusuarioModule { }
