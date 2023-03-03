import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface PeriodicElement {
  id: number;
  criterio: string;
  calificacion: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, criterio: 'Criterio de evaluacion', calificacion: 3},
  {id: 2, criterio: 'Criterio de evaluacion', calificacion: 2},
  {id: 3, criterio: 'Criterio de evaluacion', calificacion: 4},

];

@Component({
  selector: 'app-evaluacion-docente-administracion',
  templateUrl: './evaluacion-docente-administracion.component.html',
  styleUrls: ['./evaluacion-docente-administracion.component.css']
})
export class EvaluacionDocenteAdministracionComponent {
  displayedColumns: string[] = ['id', 'criterio', 'calificacion'];
  dataSource = ELEMENT_DATA;
  
  constructor(private dialogRef: MatDialogRef<EvaluacionDocenteAdministracionComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
