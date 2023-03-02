import { Component } from '@angular/core';

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

}

