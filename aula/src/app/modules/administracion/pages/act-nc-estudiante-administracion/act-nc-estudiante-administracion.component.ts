import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActCEstudianteAdministracionComponent } from '../act-c-estudiante-administracion/act-c-estudiante-administracion.component';

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
  selector: 'app-act-nc-estudiante-administracion',
  templateUrl: './act-nc-estudiante-administracion.component.html',
  styleUrls: ['./act-nc-estudiante-administracion.component.css']
})
export class ActNcEstudianteAdministracionComponent {
  displayedColumns: string[] = ['id', 'actividad'];
  dataSource = ELEMENT_DATA;
  
  constructor(private dialogRef: MatDialogRef<ActNcEstudianteAdministracionComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
