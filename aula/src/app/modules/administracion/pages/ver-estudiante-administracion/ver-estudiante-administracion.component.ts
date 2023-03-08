import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Estudiante } from '../../models/estudianteModel';
import { MateriaEstudiante } from '../../models/materiaEstudianteModel';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';
import { ActCEstudianteAdministracionComponent } from '../act-c-estudiante-administracion/act-c-estudiante-administracion.component';
import { ActNcEstudianteAdministracionComponent } from '../act-nc-estudiante-administracion/act-nc-estudiante-administracion.component';

export interface PeriodicElement {
  id: number;
  materia: string;
  paralelo: number;
}

@Component({
  selector: 'app-ver-estudiante-administracion',
  templateUrl: './ver-estudiante-administracion.component.html',
  styleUrls: ['./ver-estudiante-administracion.component.css']
})
export class VerEstudianteAdministracionComponent implements OnInit {
  estudiante!: Estudiante;
  datosMateriasEstudiante: MateriaEstudiante[] = [];

  displayedColumns: string[] = ['id', 'materia', 'paralelo', 'actCumplidas', 'actNoCumplidas'];

  constructor(
    private dialog: MatDialog, 
    private estudianteService:EstudianteAdministracionService) {}

    ngOnInit(): void {
      this.estudiante=history.state.data;
      this.estudianteService.obtenerMateriasEstudiantes(1).subscribe(data => {
        this.datosMateriasEstudiante=data.data
        console.log
      });
    }

  mostrarDialogoActC() {
    this.dialog.open(ActCEstudianteAdministracionComponent);
  }
  mostrarDialogoActNC() {
    this.dialog.open(ActNcEstudianteAdministracionComponent);
  }

}
