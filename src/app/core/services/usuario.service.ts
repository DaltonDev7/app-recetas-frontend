
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetListUserDTO } from '../models/get-list-user.dto';
import { BuscadorUserDTO } from '../models/dto/buscador-user.dto';
import { ListUsuariosDTO } from '../models/list-usuarios-dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  attachementHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  public geDatatUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.foodApp}/usuario/GetUserData`)
  }

  public getImagenUsuario(imagenRuta: string) {
    let data = { ImagenPerfil: imagenRuta }
    return this.http.post(`${environment.foodApp}/usuario/GetImagenUsuario`, data, this.attachementHeaders)
  }

  public getUsuarios(IdUsuario: number) {
    let data: GetListUserDTO = { IdUsuario }
    return this.http.post(`${environment.foodApp}/usuario/GetUsers`, data)
  }

  public buscadorUsuario(NombreUsuario: string) : Observable<ListUsuariosDTO[]> {
    let data: BuscadorUserDTO = { NombreUsuario }
    return this.http.post<ListUsuariosDTO[]>(`${environment.foodApp}/usuario/BuscadorUser`, data)
  }

}
