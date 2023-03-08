import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Estudiante } from '../../models/estudianteModel';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';
import { VerEstudianteAdministracionComponent } from '../ver-estudiante-administracion/ver-estudiante-administracion.component';


@Component({
  selector: 'app-estudiante-administracion',
  templateUrl: './estudiante-administracion.component.html',
  styleUrls: ['./estudiante-administracion.component.css']
})
export class EstudianteAdministracionComponent implements OnInit{
  datosEstudiantes: Estudiante[] = [];

  displayedColumns: string[] = ['id', 'cedula', 'nombreCompleto', 'ciclo', 'medioDifusion','acciones'];

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
    private router: Router,
    private estudianteService:EstudianteAdministracionService) {}
  
    ngOnInit(): void {
      this.estudianteService.obtenerEstudiantes().subscribe(respuesta =>{
        this.datosEstudiantes=respuesta.data;
        console.log(this.datosEstudiantes)

      });
    }

    verMateriasEstudiante() {
      this.router.navigate(['/administracion/ver-estudiante-administracion']);
  }
}
