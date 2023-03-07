import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlumnosPage } from './alumno.page';
import { DatosAlumnoComponent } from '../datos-alumno/datos-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageModule
  ],
  declarations: [AlumnosPage,DatosAlumnoComponent]
})
export class AlumnoPageModule {}
