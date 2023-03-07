import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MateriaDocente } from '../../models/materiaDocenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';

export interface PeriodicElement {
  id: number;
  materia: string;
  paralelo: string;
  modulo: number;
  calificacion: number;
}

@Component({
  selector: 'app-ver-docente-administracion',
  templateUrl: './ver-docente-administracion.component.html',
  styleUrls: ['./ver-docente-administracion.component.css']
})
export class VerDocenteAdministracionComponent implements OnInit {
  datosMateriasDocente: MateriaDocente[] = [];

  displayedColumns: string[] = ['id', 'materia', 'paralelo', 'modulo', 'calificacion'];


  constructor(
    private dialog: MatDialog, 
    private dialogRef: MatDialogRef<VerDocenteAdministracionComponent>,
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.docenteService.obtenerMateriasDocentes().subscribe(respuesta =>{
      this.datosMateriasDocente=respuesta.data;
      console.log(this.datosMateriasDocente)

    });
  }

  cerrar(){
    this.dialogRef.close();
  }
}
