import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Actividad } from '../../models/actividadModel';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';

export interface PeriodicElement {
  id: number;
  actividad: string;
}

@Component({
  selector: 'app-act-c-estudiante-administracion',
  templateUrl: './act-c-estudiante-administracion.component.html',
  styleUrls: ['./act-c-estudiante-administracion.component.css']
})
export class ActCEstudianteAdministracionComponent implements OnInit {
  datosActividad: Actividad[] = [];

  displayedColumns: string[] = ['id', 'actividad'];
  
  
  constructor(
    private dialogRef: MatDialogRef<ActCEstudianteAdministracionComponent>,
    private estudianteService:EstudianteAdministracionService) {}

  ngOnInit(): void {
    this.estudianteService.obtenerActividadesCEstudiantes().subscribe(respuesta =>{
      this.datosActividad=respuesta.data;
      console.log(this.datosActividad)

    });
  }

  cerrar() {
    this.dialogRef.close();
  }
}
