import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { GetPostByIdResolver } from 'src/app/core/resolvers/getPostById.resolver.resolver';
import {GalleriaModule} from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { NivelDificultadModule } from '../nivel-dificultad/nivel-dificultad.module';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    GalleriaModule,
    CardModule,
    TabViewModule,
    BadgeModule,
    NivelDificultadModule,
    RatingModule,
    FormsModule
  ],
  providers:[
    GetPostByIdResolver
  ]
})
export class PostDetailModule { }
