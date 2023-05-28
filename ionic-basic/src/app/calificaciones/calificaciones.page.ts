import { Component, OnInit } from '@angular/core';
import { calificacion } from '../interface/calificacion';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalifServiceService } from '../service/calif-service.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  calificaciones: calificacion[] = [];

  formulario: FormGroup;
  formularioEdicion: FormGroup;

  constructor(private formBuilder: FormBuilder, public califSrv: CalifServiceService) {
    this.formulario = new FormGroup({
      materia: new FormControl('', Validators.required),
      calificacion: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      aprobado: new FormControl(false)
    });

    this.formularioEdicion = new FormGroup({
      materia: new FormControl('', Validators.required),
      calificacion: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      aprobado: new FormControl(false)
    });
  }
  ngOnInit() {
  }


}
