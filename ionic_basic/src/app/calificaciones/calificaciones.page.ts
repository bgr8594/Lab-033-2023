import { Component, OnInit } from '@angular/core';
import {CalificacionesService} from '../calificaciones.service';
import {Calificacion} from '../interface/Calificacion';
@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

 calificaciones: Calificacion[];

  constructor(private calificacionesService: CalificacionesService) {}

  ionViewWillEnter() {
    this.calificaciones = this.calificacionesService.getCalificaciones();
  }

  altaCalificacion(calificacion: Calificacion) {
    this.calificacionesService.altaCalificacion(calificacion);
    this.calificaciones = this.calificacionesService.getCalificaciones();
  }

  bajaCalificacion(calificacion: Calificacion) {
    this.calificacionesService.bajaCalificacion(calificacion);
    this.calificaciones = this.calificacionesService.getCalificaciones();
  }
}