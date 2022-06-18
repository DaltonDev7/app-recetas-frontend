import { Post } from "./post.model";

export interface PasosRecetas {
  Id?: number;
  Descripcion?: string;
  FechaCreacion?: Date;
  FechaModificacion?: Date;
  PostRecetas?: Post
}
