import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail.component';
import { GetPostByIdResolver } from 'src/app/core/resolvers/getPostById.resolver.resolver';

const routes: Routes = [
  {
    path: ':idPost',
    component: PostDetailComponent,
    resolve: {
      post: GetPostByIdResolver
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostDetailRoutingModule { }
