import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MateriaEstudiante } from '../../models/materiaEstudianteModel';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';
import { ActCEstudianteAdministracionComponent } from '../act-c-estudiante-administracion/act-c-estudiante-administracion.component';
import { ActNcEstudianteAdministracionComponent } from '../act-nc-estudiante-administracion/act-nc-estudiante-administracion.component';

export interface PeriodicElement {
  id: number;
  materia: string;
  modulo: number;
}

@Component({
  selector: 'app-ver-estudiante-administracion',
  templateUrl: './ver-estudiante-administracion.component.html',
  styleUrls: ['./ver-estudiante-administracion.component.css']
})
export class VerEstudianteAdministracionComponent implements OnInit {
  datosMateriasEstudiante: MateriaEstudiante[] = [];

  displayedColumns: string[] = ['id', 'materia', 'modulo', 'actCumplidas', 'actNoCumplidas'];

  constructor(
    private dialog: MatDialog, 
    private dialogRef: MatDialogRef<VerEstudianteAdministracionComponent>,
    private estudianteService:EstudianteAdministracionService) {}

  ngOnInit(): void {
    this.estudianteService.obtenerMateriasEstudiantes().subscribe(respuesta =>{
      this.datosMateriasEstudiante=respuesta.data;
      console.log(this.datosMateriasEstudiante)

    });
  }
  cerrar(){
    this.dialogRef.close();
  }
  mostrarDialogoActC() {
    this.dialog.open(ActCEstudianteAdministracionComponent);
  }
  mostrarDialogoActNC() {
    this.dialog.open(ActNcEstudianteAdministracionComponent);
  }

}
