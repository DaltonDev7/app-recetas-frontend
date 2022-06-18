import { ImagenesPost } from "../imagenes-post.model"
import { IngredientesRecetas } from "../ingrediente-receta.model"
import { NivelDificultad } from "../nivel-dificultad.model"
import { Nutricion } from "../Nutricion.model"
import { PasosRecetas } from "../pasos-recetas.model"

export interface PostDetailDTO {
  Id?: number
  Descripcion?: string
  Titulo?: string
  UsuarioNombre?: string
  UsuarioApellido?: string
  FechaCreacion?: Date
  NivelDificultad?: NivelDificultad
  PasosRecetas?: PasosRecetas[]
  Ingredientes?: IngredientesRecetas[]
  UsuarioImagen?: string;
  ImagenesPost: ImagenesPost
  CantidadPersona?:number;
  Nutricion?: Nutricion
}
