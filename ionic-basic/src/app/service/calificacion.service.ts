import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Calificacion } from '../interface/calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  calificaciones: Calificacion[] = [];

  altaForm: FormGroup;

  constructor() {
    this.altaForm = new FormGroup({
      materia: new FormControl('', Validators.required),
      calificacion: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      aprobado: new FormControl(false)
    });
  }

  agregarCalificacion(): void {
    if (this.altaForm.valid) {
      const nuevaCalificacion: Calificacion = {
        materia: this.altaForm.value.materia,
        calificacion: this.altaForm.value.calificacion,
        aprobado: this.altaForm.value.aprobado
      };

      this.calificaciones.push(nuevaCalificacion);
      this.altaForm.reset();
    } else {
      // Mostrar errores y mensajes de validación
      this.altaForm.markAllAsTouched();
    }
  }

  eliminarCalificacion(index: number): void {
    this.calificaciones.splice(index, 1);
  }
}