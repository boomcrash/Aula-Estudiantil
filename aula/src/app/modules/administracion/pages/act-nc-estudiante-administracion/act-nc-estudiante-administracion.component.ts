import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Actividad } from '../../models/actividadModel';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';

export interface PeriodicElement {
  id: number;
  actividad: string;
}

@Component({
  selector: 'app-act-nc-estudiante-administracion',
  templateUrl: './act-nc-estudiante-administracion.component.html',
  styleUrls: ['./act-nc-estudiante-administracion.component.css']
})
export class ActNcEstudianteAdministracionComponent implements OnInit {
  datosActividades: Actividad[] = [];

  displayedColumns: string[] = ['id', 'actividad'];
  
  
  constructor(
    private dialogRef: MatDialogRef<ActNcEstudianteAdministracionComponent>,
    private estudianteService:EstudianteAdministracionService) {}

  ngOnInit(): void {
    this.estudianteService.obtenerActividadesNCEstudiantes().subscribe(respuesta =>{
      this.datosActividades=respuesta.data;
      console.log(this.datosActividades)

    });
  }

  cerrar() {
    this.dialogRef.close();
  }
}
