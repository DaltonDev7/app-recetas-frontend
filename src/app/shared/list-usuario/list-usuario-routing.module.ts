import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './list-usuario.component';
import { ListUsuarioResolver } from 'src/app/core/resolvers/list-usuarios.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListUsuarioComponent,
    resolve : {
      usuarios : ListUsuarioResolver
    }
  },
  {
    path:':username',
    loadChildren: () => import('../perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ListUsuarioRoutingModule { }
