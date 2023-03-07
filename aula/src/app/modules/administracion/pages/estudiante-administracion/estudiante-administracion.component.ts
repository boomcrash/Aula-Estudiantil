import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Estudiante } from '../../models/estudianteModel';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';
import { VerEstudianteAdministracionComponent } from '../ver-estudiante-administracion/ver-estudiante-administracion.component';

export interface PeriodicElement {
  id: number;
  cedula: string;
  nombreCompleto: string;
  nivel: number;
  ciclo: string;
  medioDifusion: string;
}

@Component({
  selector: 'app-estudiante-administracion',
  templateUrl: './estudiante-administracion.component.html',
  styleUrls: ['./estudiante-administracion.component.css']
})
export class EstudianteAdministracionComponent implements OnInit{
  datosEstudiantes: Estudiante[] = [];

  displayedColumns: string[] = ['id', 'cedula', 'nombreCompleto', 'nivel', 'ciclo', 'medioDifusion','acciones'];

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
  
  constructor(
    private dialog: MatDialog,
    private estudianteService:EstudianteAdministracionService) {}
  
    ngOnInit(): void {
      this.estudianteService.obtenerEstudiantes().subscribe(respuesta =>{
        this.datosEstudiantes=respuesta.data;
        console.log(this.datosEstudiantes)

      });
    }

  mostrarDialogoVer() {
    this.dialog.open(VerEstudianteAdministracionComponent);
  }
}
