import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SaveCalificacion } from '../models/calificacion-save.model';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private http: HttpClient) { }

  public save(payload: SaveCalificacion) {
    return this.http.post(`${environment.foodApp}/calificacion/save`, payload)
  }


}
