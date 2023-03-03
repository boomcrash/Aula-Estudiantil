import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface PeriodicElement {
  id: number;
  actividad: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, actividad: 'Nombre de la Actividad'},
  {id: 2, actividad: 'Nombre de la Actividad'},
  {id: 3, actividad: 'Nombre de la Actividad'},

];

@Component({
  selector: 'app-act-c-estudiante-administracion',
  templateUrl: './act-c-estudiante-administracion.component.html',
  styleUrls: ['./act-c-estudiante-administracion.component.css']
})
export class ActCEstudianteAdministracionComponent {
  displayedColumns: string[] = ['id', 'actividad'];
  dataSource = ELEMENT_DATA;
  
  constructor(private dialogRef: MatDialogRef<ActCEstudianteAdministracionComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
