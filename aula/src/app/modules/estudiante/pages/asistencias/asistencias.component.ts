import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AsistenciasModel } from '../../models/asistenciasModel';
import { EstudiantePerfil } from '../../models/estudianteperfil.model';
import { AsistenciasService } from './services/asistencias.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css']
})
export class AsistenciasComponent {
  displayedColumns = ['fecha', 'estado'];
  dataSource!: AsistenciasModel[];
  datosCompletos!: EstudiantePerfil [];

  id = parseInt(this.cookie.get('id'));

  constructor(private cookie: CookieService, private asistenciasservice: AsistenciasService){}
  ngOnInit(){
    this.id = parseInt(this.cookie.get('id'));
    this.asistenciasservice.obtenerDatosEstudiante(this.id).subscribe(data =>{
      this.asistenciasservice.obtenerAsistencias(data[0].id_estudiante).subscribe(dato=>{
      this.dataSource=dato.data;
      console.log(this.dataSource);
    });
  });
  }
}
