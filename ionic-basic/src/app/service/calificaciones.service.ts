import { Injectable } from '@angular/core';
import {Calificacion} from '../interface/calificacion';
@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

export class CalificacionesService {
  private calificaciones: Calificacion[] = [];

  getCalificaciones(): Calificacion[] {
    return this.calificaciones;
  }

  altaCalificacion(calificacion: Calificacion) {
    this.calificaciones.push(calificacion);
  }

  bajaCalificacion(calificacion: Calificacion) {
    const index = this.calificaciones.indexOf
}
}
