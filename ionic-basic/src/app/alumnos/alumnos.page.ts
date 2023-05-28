import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interface/alumno';
import { AlumnoService } from '../service/alumno.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos:Alumno[]=[];
  nombre: string ='';
  matricula: string = '';
  estado: string = '';
  idActualizar: any|number = 0;
  error: boolean = false;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {


    this.alumnos = this.alumnoService.getAlumos();
    this.estado ='guardar';
  }

  public guardar(){
    if( (this.nombre == undefined || this.nombre == '' ) || 
      (this.matricula == undefined || this.matricula == '') ) {
      this.error = true;
      return;
    }  
    let alumno: Alumno={
      nombre: this.nombre,
      matricula: this.matricula
    };

    let i;
    console.log(this.idActualizar);
    for(i=0;i<this.idActualizar;i++){
      if(this.alumnoService.getAlumos()[i].matricula == this.matricula){
        this.error = true;
        return;
      }
    }


    if (this.estado ==='actualizar'){
      console.log(alumno.id)
      alumno.id = this.idActualizar;
      this.alumnos = this.alumnoService.actualiza(alumno);
      
    }
    if(this.estado === 'guardar'){
      this.alumnoService.agregarAlumno(alumno);
      this.alumnos = this.alumnoService.getAlumos();
      this.idActualizar++;
    }
    this.cancelar();
    
    
  }

  public cancelar(){
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.error = false;
  }

  public eliminar(id:number){
    this.alumnoService.borrarAlumno(id);
    this.alumnos = this.alumnoService.getAlumos();
  }

  public editar(alumno:Alumno){
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }
}
