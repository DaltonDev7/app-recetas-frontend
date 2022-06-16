import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.activeRouter.data.subscribe((data: any) => {
      this.listUsuarios = data.usuarios.data
    })
  }

  buscadorUsuarios(event: any) {
    this.usuarioService.buscadorUsuario(event).subscribe((data: any) => {
      this.listUsuarios = data.data
    })

  }

  navigateUser(userName: string) {
    this.router.navigate([userName], { relativeTo: this.activeRouter })
  }


}
