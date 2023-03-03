import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContratoDocenteAdministracionComponent } from '../contrato-docente-administracion/contrato-docente-administracion.component';
import { PagosDocenteAdministracionComponent } from '../pagos-docente-administracion/pagos-docente-administracion.component';
import { VerDocenteAdministracionComponent } from '../ver-docente-administracion/ver-docente-administracion.component';

export interface PeriodicElement {
  id: number;
  cedula: string;
  nombreCompleto: string;
  ciclo: string;
  estado: string;
  contrato: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, cedula: '0978656755', nombreCompleto: 'Ana Maria Velez Mite', ciclo: 'actual', estado: 'activo', contrato: 'Titular'},
  {id: 2, cedula: '0987654321', nombreCompleto: 'Juana Lola Andrade Peña', ciclo: 'anterior', estado: 'activo', contrato: 'Titular'},
  {id: 3, cedula: '0912345678', nombreCompleto: 'Jose Juanito Tomala Perez', ciclo: 'actual', estado: 'activo', contrato: 'Titular'},
];

@Component({
  selector: 'app-docente-administracion',
  templateUrl: './docente-administracion.component.html',
  styleUrls: ['./docente-administracion.component.css']
})
export class DocenteAdministracionComponent {
  displayedColumns: string[] = ['id', 'cedula', 'nombreCompleto', 'ciclo', 'estado', 'contrato','acciones'];
  dataSource = ELEMENT_DATA;
  
  filtro: string[] = [
    'Cedula',
    'Nombre',
    'Ciclo',
    'Estado',
    'Contrato',
  ];

  opciones: string[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3',
  ];

  constructor(private dialog: MatDialog) {}

  mostrarDialogoPagos() {
    this.dialog.open(PagosDocenteAdministracionComponent);
  }

  mostrarDialogoContrato() {
    this.dialog.open(ContratoDocenteAdministracionComponent);
  }

  mostrarDialogoVer() {
    this.dialog.open(VerDocenteAdministracionComponent);
  }
}

