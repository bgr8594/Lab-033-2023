import { Component } from '@angular/core';
import { Calificacion } from '../interface/calificacion';
import { CalificacionService } from '../service/calificacion.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage {
  calificaciones: Calificacion[] = [];

  constructor(private calificacionService: CalificacionService) {
    this.calificaciones = this.calificacionService.calificaciones;
  }

  agregarCalificacion(): void {
    this.calificacionService.agregarCalificacion();
  }

  eliminarCalificacion(index: number): void {
    this.calificacionService.eliminarCalificacion(index);
  }
}
