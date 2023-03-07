import { Component, OnInit } from '@angular/core';
import { Docente } from './models/docenteModel';
import { Estudiante } from './models/estudianteModel';
import { DocenteAdministracionService } from './services/docente-administracion.service';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit{
  datosDocentes: Docente[] = [];
  datosEstudiantes: Estudiante[] = [];

  displayedColumns: string[] = ['id', 'nombreCompleto'];


  constructor(private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.docenteService.obtenerTopDocentes().subscribe(respuesta =>{
      this.datosDocentes=respuesta.data;
      console.log(this.datosDocentes)

    });
  }
}
