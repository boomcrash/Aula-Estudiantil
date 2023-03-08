import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContratoDocenteAdministracionComponent } from '../contrato-docente-administracion/contrato-docente-administracion.component';
import { Docente } from '../../models/docenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';
import { ActivatedRoute, Router } from '@angular/router';


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
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.docenteService.obtenerDocentes().subscribe(respuesta =>{
      this.datosDocentes=respuesta.data;
      console.log(this.datosDocentes)

    });
  }
  mostrarPagos() {
    this.router.navigate(['/administracion/pagos-docente-administracion']);
  }

  mostrarDialogoContrato() {
    this.dialog.open(ContratoDocenteAdministracionComponent);
  }

  verMateriasDocente(id: number) {
    this.router.navigate(['/administracion/ver-docente-administracion'],
    { relativeTo:  this.route, queryParams: {id_docente:id} });
  }
}


