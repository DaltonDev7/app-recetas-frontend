import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuarioComponent } from './list-usuario.component';
import { ListUsuarioRoutingModule } from './list-usuario-routing.module';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { FormsModule } from '@angular/forms';
import { ListUsuarioResolver } from 'src/app/core/resolvers/list-usuarios.resolver';
//import { DateFromNowPipe } from 'src/app/core/pipes/datefromnow.pipe';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';


@NgModule({
  declarations: [
    ListUsuarioComponent,
 //   DateFromNowPipe
  ],
  imports: [
    CommonModule,
    CardModule,
    BadgeModule,
    AvatarModule,
    FormsModule,
    AvatarGroupModule,
    ListUsuarioRoutingModule
  ],
  providers: [
    ListUsuarioResolver
  ]
})
export class ListUsuarioModule { }
