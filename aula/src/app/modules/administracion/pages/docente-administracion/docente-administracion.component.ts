import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContratoDocenteAdministracionComponent } from '../contrato-docente-administracion/contrato-docente-administracion.component';
import { PagosDocenteAdministracionComponent } from '../pagos-docente-administracion/pagos-docente-administracion.component';
import { VerDocenteAdministracionComponent } from '../ver-docente-administracion/ver-docente-administracion.component';
import { Docente } from '../../models/docenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';

export interface PeriodicElement {
  id: number;
  cedula: string;
  nombreCompleto: string;
  ciclo: string;
  estado: string;
  contrato: string;
}

@Component({
  selector: 'app-docente-administracion',
  templateUrl: './docente-administracion.component.html',
  styleUrls: ['./docente-administracion.component.css']
})
export class DocenteAdministracionComponent implements OnInit {
  datosDocentes: Docente[] = [];

  displayedColumns: string[] = ['id', 'cedula', 'nombreCompleto', 'ciclo', 'estado', 'contrato','acciones'];
  
  
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

  constructor(
    private dialog: MatDialog,
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.docenteService.obtenerDocentes().subscribe(respuesta =>{
      this.datosDocentes=respuesta.data;
      console.log(this.datosDocentes)

    });
  }
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

