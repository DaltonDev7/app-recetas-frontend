import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { GetUsuarioByUserName } from 'src/app/core/resolvers/get-usuario-by-username.resolver';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioComponent,
    resolve: {
       usuario: GetUsuarioByUserName
    }
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PerfilUsuarioRoutingModule { }
