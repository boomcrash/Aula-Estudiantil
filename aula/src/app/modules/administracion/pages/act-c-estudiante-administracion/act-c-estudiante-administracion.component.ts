import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActividadCumplida } from '../../models/actividadesCumplidasModel';
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
  datosActividadCumplida: ActividadCumplida[] = [];

  displayedColumns: string[] = ['id', 'actividad'];
  
  
  constructor(
    private dialogRef: MatDialogRef<ActCEstudianteAdministracionComponent>,
    private estudianteService:EstudianteAdministracionService) {}

  ngOnInit(): void {
    this.estudianteService.obtenerActividadesCEstudiantes().subscribe(respuesta =>{
      this.datosActividadCumplida=respuesta.data;
      console.log(this.datosActividadCumplida)

    });
  }

  cerrar() {
    this.dialogRef.close();
  }
}
