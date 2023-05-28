import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { calificacion } from '../interface/calificacion';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalifServiceService {

  calificaciones: calificacion[] = [];
  editMode: boolean = false;
  constructor() { }

  altaCalificacion(forms: any){
    // if(this.calificaciones.length > 0){
    //   const x = this.calificaciones[this.calificaciones.length-1].id + 1 
    //   forms.value.id = x
    // }
    // else{
    //   forms.value.id = 0;
    // }
    
    //  console.log(forms.value)
    this.calificaciones.push(forms.value)
    console.log(this.calificaciones)

  }

  actualizarCalificacion(forms: any){
    this.editMode = false
    let indice = this.calificaciones.findIndex(calificacion => calificacion.materia === forms.materia && calificacion.calificacion === forms.calificacion) + 1;
    console.log(indice)
    this.calificaciones[indice] = forms.value
    console.log(forms.value)
    console.log(this.calificaciones[indice])
  }

  editarCalificacion(forms: any){
    this.editMode = true
  }

  borrarCalificacion(forms: any){
    forms.calificacion
    forms.materia
    let indice = this.calificaciones.findIndex(calificacion => calificacion.materia === forms.materia && calificacion.calificacion === forms.calificacion);
  if (indice !== -1) {
    this.calificaciones.splice(indice, 1);
  }



  }
}

