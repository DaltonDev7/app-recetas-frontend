import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';





const routes: Routes = [
  {
    path: '',
    component: HomeUsuarioComponent
  },
  {
    path: 'me',
    loadChildren: () => import('../../shared/mi-perfil/mi-perfil.module').then(m => m.MiPerfilModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-recetas/add-recetas.module').then(m => m.AddRecetasModule)
  },
  {
    path: 'populares',
    loadChildren: () => import('../../shared/recetas-populares/recetas-populares.module').then(m => m.RecetasPopularesModule)
  },
  {
    path:'users',
    loadChildren: () => import('../../shared/list-usuario/list-usuario.module').then(m => m.ListUsuarioModule)
  },
  {
    path: 'post',
    loadChildren: () => import('../../shared/post-detail/post-detail.module').then(m => m.PostDetailModule),
  },
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
export class UsuarioRoutingModule { }
