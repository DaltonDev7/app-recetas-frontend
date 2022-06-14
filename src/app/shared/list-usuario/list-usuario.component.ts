import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListUsuariosDTO } from 'src/app/core/models/list-usuarios-dto';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit {

  listUsuarios: ListUsuariosDTO[] = []
  filterUser: string;

  constructor(private activeRouter: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.activeRouter.data.subscribe((data: any) => {
      this.listUsuarios = data.usuarios.data
      console.log(this.listUsuarios);
    })
  }

  buscadorUsuarios(event: any) {
    console.log(this.filterUser);

    this.usuarioService.buscadorUsuario(event).subscribe((data:any) => {
      console.log(data);
      this.listUsuarios = data.data

    })

  }


}
