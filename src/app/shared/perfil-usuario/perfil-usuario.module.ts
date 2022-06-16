import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { GetUsuarioByUserName } from 'src/app/core/resolvers/get-usuario-by-username.resolver';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { PostModule } from '../post/post.module';



@NgModule({
  declarations: [
    PerfilUsuarioComponent
  ],
  imports: [
    CommonModule,
    PerfilUsuarioRoutingModule,
    PostModule,
    ButtonModule,
    CardModule,
    BadgeModule,
  ],
  providers:[
    GetUsuarioByUserName
  ]
})
export class PerfilUsuarioModule { }
