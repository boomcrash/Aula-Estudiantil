import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Docente } from '../../models/docenteModel';
import { MateriaDocente } from '../../models/materiaDocenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';


@Component({
  selector: 'app-ver-docente-administracion',
  templateUrl: './ver-docente-administracion.component.html',
  styleUrls: ['./ver-docente-administracion.component.css']
})
export class VerDocenteAdministracionComponent implements OnInit {
  docente!: Docente;
  datosMateriasDocente: MateriaDocente[] = [];

  displayedColumns: string[] = ['id', 'materia', 'paralelo', 'evaluo', 'calificacion'];


  constructor(
    private dialog: MatDialog, 
    private dialogRef: MatDialogRef<VerDocenteAdministracionComponent>,
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.docente=history.state.data;
    this.docenteService.obtenerEvaluacionesDocentes(1).subscribe(data => {
      this.datosMateriasDocente=data.data
      console.log
    });
  }

  cerrar(){
    this.dialogRef.close();
  }
}
