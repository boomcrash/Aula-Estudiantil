import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerEstudianteAdministracionComponent } from '../ver-estudiante-administracion/ver-estudiante-administracion.component';

export interface PeriodicElement {
  id: number;
  cedula: string;
  nombreCompleto: string;
  nivel: number;
  ciclo: string;
  medioDifusion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, cedula: '0978656755', nombreCompleto: 'Ana Maria Velez Mite', nivel: 3, ciclo: 'actual', medioDifusion: 'tv'},
  {id: 2, cedula: '0987654321', nombreCompleto: 'Juana Lola Andrade Peña', nivel: 2, ciclo: 'anterior', medioDifusion: 'redes sociales'},
  {id: 3, cedula: '0912345678', nombreCompleto: 'Jose Juanito Tomala Perez', nivel: 1, ciclo: 'actual', medioDifusion: 'radio'},
];

@Component({
  selector: 'app-estudiante-administracion',
  templateUrl: './estudiante-administracion.component.html',
  styleUrls: ['./estudiante-administracion.component.css']
})
export class EstudianteAdministracionComponent {
  displayedColumns: string[] = ['id', 'cedula', 'nombreCompleto', 'nivel', 'ciclo', 'medioDifusion','acciones'];
  dataSource = ELEMENT_DATA;

  filtro: string[] = [
    'Cedula',
    'Nombre',
    'Ciclo',
    'Módulo',
    'Medio de Difusión',
  ];

  opciones: string[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3',
  ];
  
  constructor(private dialog: MatDialog) {}
  mostrarDialogoVer() {
    this.dialog.open(VerEstudianteAdministracionComponent);
  }
}
