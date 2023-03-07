import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActividadNoCumplida } from '../../models/actividadesNoCumplidasModel';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';
import { ActCEstudianteAdministracionComponent } from '../act-c-estudiante-administracion/act-c-estudiante-administracion.component';

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
  datosActividadesNoCumplidas: ActividadNoCumplida[] = [];

  displayedColumns: string[] = ['id', 'actividad'];
  
  
  constructor(
    private dialogRef: MatDialogRef<ActNcEstudianteAdministracionComponent>,
    private estudianteService:EstudianteAdministracionService) {}

  ngOnInit(): void {
    this.estudianteService.obtenerActividadesNCEstudiantes().subscribe(respuesta =>{
      this.datosActividadesNoCumplidas=respuesta.data;
      console.log(this.datosActividadesNoCumplidas)

    });
  }

  cerrar() {
    this.dialogRef.close();
  }
}
