import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import { getIdCurrentUser } from "src/app/authentication/store";
import * as fromApp from 'src/app/state/app.state';
import { UsuarioService } from "../services/usuario.service";


@Injectable()
export class GetUsuarioByUserName implements Resolve<any> {

  idUsuario: number;

  constructor(
    private usuarioService: UsuarioService,
    private store: Store<fromApp.State>,
    private route : Router
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.usuarioService.getUsuarioByUserName(route.params['username']).pipe((take(1)))
  }
}
