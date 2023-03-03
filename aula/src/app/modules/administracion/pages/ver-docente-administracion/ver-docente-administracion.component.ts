import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EvaluacionDocenteAdministracionComponent } from '../evaluacion-docente-administracion/evaluacion-docente-administracion.component';

export interface PeriodicElement {
  id: number;
  materia: string;
  paralelo: string;
  modulo: number;
  calificacion: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, materia: 'Materia', paralelo: '3-2', modulo: 1, calificacion: 2},
  {id: 2, materia: 'Materia', paralelo: '4-3', modulo: 2, calificacion: 3},
  {id: 3, materia: 'Materia', paralelo: '5-4', modulo: 3, calificacion: 4},

];

@Component({
  selector: 'app-ver-docente-administracion',
  templateUrl: './ver-docente-administracion.component.html',
  styleUrls: ['./ver-docente-administracion.component.css']
})
export class VerDocenteAdministracionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'materia', 'paralelo', 'modulo', 'calificacion', 'detalle'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<VerDocenteAdministracionComponent>) {}

  ngOnInit() {
    
  }
  cerrar(){
    this.dialogRef.close();
  }
  mostrarDialogoEvaluacion() {
    this.dialog.open(EvaluacionDocenteAdministracionComponent);
  }
}
