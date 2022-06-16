import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiPerfilRoutingModule } from './mi-perfil-routing.module';
import { MiperfilComponent } from './miperfil.component';
import { ImagenPerfilModule } from '../show-imagen-perfil/imagen-perfil.module';
import {ButtonModule} from 'primeng/button';
import { GetPostByUserResolver } from 'src/app/core/resolvers/get-post-by-user.resolver';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import { SharedModule } from '../shared.module';
import { PostModule } from '../post/post.module';
@NgModule({
  declarations: [
    MiperfilComponent
  ],
  imports: [
    CommonModule,
    PostModule,
    MiPerfilRoutingModule,
    ImagenPerfilModule,
    ButtonModule,
    CardModule,
    BadgeModule,
    SharedModule
  ],
  providers:[
    GetPostByUserResolver
  ]
})
export class MiPerfilModule { }
