import { Component, OnInit } from '@angular/core';
import { Docente } from './models/docenteModel';
import { Estudiante } from './models/estudianteModel';
import { DocenteAdministracionService } from './services/docente-administracion.service';
import { EstudianteAdministracionService } from './services/estudiante-administracion.service';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit{
  docente!: Docente;
  estudiante!: Estudiante;
  datosDocentes: Docente[] = [];
  datosEstudiantes: Estudiante[] = [];

  constructor(
    private docenteService:DocenteAdministracionService,
    private estudianteService:EstudianteAdministracionService,
    ) {}

  ngOnInit(): void {
    this.docente=history.state.data;
    this.docenteService.obtenerTopDocentes('2023-2024 CI').subscribe(data => {
      this.datosDocentes=data.data
      console.log
    });

    this.docente=history.state.data;
    this.estudianteService.obtenerTopEstudiantes(2).subscribe(data => {
      this.datosDocentes=data.data
      console.log
    });
  }
}
