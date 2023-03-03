import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActCEstudianteAdministracionComponent } from '../act-c-estudiante-administracion/act-c-estudiante-administracion.component';
import { ActNcEstudianteAdministracionComponent } from '../act-nc-estudiante-administracion/act-nc-estudiante-administracion.component';
import { EvaluacionDocenteAdministracionComponent } from '../evaluacion-docente-administracion/evaluacion-docente-administracion.component';

export interface PeriodicElement {
  id: number;
  materia: string;
  modulo: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, materia: 'Materia', modulo: 1},
  {id: 2, materia: 'Materia', modulo: 2},
  {id: 3, materia: 'Materia', modulo: 3},

];

@Component({
  selector: 'app-ver-estudiante-administracion',
  templateUrl: './ver-estudiante-administracion.component.html',
  styleUrls: ['./ver-estudiante-administracion.component.css']
})
export class VerEstudianteAdministracionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'materia', 'modulo', 'actCumplidas', 'actNoCumplidas'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<VerEstudianteAdministracionComponent>) {}

  ngOnInit() {
    
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
