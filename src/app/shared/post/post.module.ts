import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    BadgeModule,
  ],
  exports:[
    PostComponent
  ]
})
export class PostModule { }
