import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state';
import { getCurrentUser, getImgUsuarioRuta } from 'src/app/authentication/store';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { PostService } from '../../profile/usuario/services/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.scss']
})
export class MiperfilComponent implements OnInit {

  usuario: Usuario
  postRecetas:any[]=[]

  constructor(
    private store: Store<fromApp.State>,
    private usuarioService: UsuarioService,
    private postService : PostService,
    private activedRouted :  ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.store.select((getCurrentUser)).subscribe((usuario: Usuario) => {
      this.usuario = usuario
    })

    this.activedRouted.data.subscribe((data:any) => {
      console.log(data);
     this.postRecetas = data.postsUsuarios
    })

  }

}
