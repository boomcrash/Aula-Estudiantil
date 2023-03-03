import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface PeriodicElement {
  fecha: string;
  sueldo: number;
  faltas: number;
  descuento: number;
  total: number;
  cedula: string;
  nombreCompleto: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '01/01/2000', sueldo: 400, faltas: 3, descuento: 10, total: 2, cedula: '0978656755', nombreCompleto: 'Ana Maria Velez Mite'},
  {fecha: '01/02/2000', sueldo: 400, faltas: 2, descuento: 20, total: 3, cedula: '0978222755', nombreCompleto: 'Juana Lola Andrade Peña'},
  {fecha: '01/03/2000', sueldo: 400, faltas: 4, descuento: 30, total: 4, cedula: '0978656655', nombreCompleto: 'Jose Juanito Tomala Perez'},

];

@Component({
  selector: 'app-pagos-docente-administracion',
  templateUrl: './pagos-docente-administracion.component.html',
  styleUrls: ['./pagos-docente-administracion.component.css']
})
export class PagosDocenteAdministracionComponent {
  displayedColumns: string[] = ['fecha', 'sueldo', 'faltas', 'descuento', 'total', 'cedula', 'nombreCompleto'];
  dataSource = ELEMENT_DATA;
  
  filtro: string[] = [
    'Cedula',
    'Nombre',
    'Fecha',
  ];

  opciones: string[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3',
  ];

  constructor(private dialogRef: MatDialogRef<PagosDocenteAdministracionComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
