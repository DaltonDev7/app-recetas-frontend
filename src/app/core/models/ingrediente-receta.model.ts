import { Post } from "./post.model";


export interface IngredientesRecetas {
  Id?: number;
  Descripcion?: string;
  FechaCreacion?: Date;
  FechaModificacion?: Date;
  PostRecetas?: Post
}
