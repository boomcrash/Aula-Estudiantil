import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Docente } from '../../models/docenteModel';
import { PagoDocente } from '../../models/pagoDocentesModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';

export interface PeriodicElement {
  fecha: string;
  sueldo: number;
  faltas: number;
  descuento: number;
  total: number;
  cedula: string;
  nombreCompleto: string;
}

@Component({
  selector: 'app-pagos-docente-administracion',
  templateUrl: './pagos-docente-administracion.component.html',
  styleUrls: ['./pagos-docente-administracion.component.css']
})
export class PagosDocenteAdministracionComponent implements OnInit {
  datosPagoDocentes: PagoDocente[] = [];
  datosDocentes: Docente[] = [];

  displayedColumns: string[] = ['fecha', 'sueldo', 'faltas', 'descuento', 'total', 'cedula', 'nombreCompleto'];
  
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

  constructor(
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.docenteService.obtenerPagoDocentes().subscribe(respuesta =>{
      this.datosPagoDocentes=respuesta.data;
      console.log(this.datosPagoDocentes)

      this.docenteService.obtenerDocentes().subscribe(respuesta =>{
        this.datosDocentes=respuesta.data;
        console.log(this.datosDocentes)
      });

    });
  }
}
