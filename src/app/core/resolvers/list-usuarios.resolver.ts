import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import { getIdCurrentUser } from "src/app/authentication/store";
import * as fromApp from 'src/app/state/app.state';
import { UsuarioService } from "../services/usuario.service";


@Injectable()
export class ListUsuarioResolver implements Resolve<any> {

  idUsuario: number;

  constructor(
    private usuarioService: UsuarioService,
    private store: Store<fromApp.State>
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.store.select((getIdCurrentUser)).subscribe((idUser) => {
      console.log(idUser);

      this.idUsuario = idUser
    })

    return this.usuarioService.getUsuarios(this.idUsuario).pipe((take(1)))
  }
}
