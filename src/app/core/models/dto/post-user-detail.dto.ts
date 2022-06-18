import { NivelDificultad } from "../nivel-dificultad.model"

export interface PostUserDetailDTO{
  Id?:number
  UsuarioNombre?:string
  UsuarioApellido?:string
  Titulo?:string
  FechaCreacion?:Date
  IdNivelDificultad?:number
  NivelDificultad?:NivelDificultad
  UsuarioImagen?:string
  ImagenPost?:string
}
