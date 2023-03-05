import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadesModel } from '../../models/actividadesModel';
import { CursoModel } from '../../models/cursoModel';
import { EntregaModel } from '../../models/EntregaModel';
import { PresentarActividad } from '../../models/presentarActividad';
import { presentarActividadesModel } from '../../models/presentarActividadesModel';
import { ActividadesService } from '../materia/services/actividades.service';

@Component({
  selector: 'app-vista-actividad',
  templateUrl: './vista-actividad.component.html',
  styleUrls: ['./vista-actividad.component.css']
})
export class VistaActividadComponent implements OnInit {
  @Input() idActividad!: number;
  curso!: CursoModel;
  dataSourceActividades!: ActividadesModel[];
  obtenerEntregas!: EntregaModel[];
  presentarActividad: PresentarActividad[] = [];

  id_curso: number = 0;


  constructor(private router: Router, private actividadService: ActividadesService,) { }

  ngOnInit() {
    console.log(this.idActividad);
    this.curso = history.state.data;
    console.log(this.curso);
    this.id_curso = this.curso.id_curso;
    this.actividadService.obtenerEntregas().subscribe((data) => {
      this.obtenerEntregas = data.data;
      console.log(this.curso.id_curso);
      this.actividadService.obtenerActividades(this.curso.id_curso).subscribe((data) => {
        this.dataSourceActividades = data.data;
        for (let i = 0; i < this.obtenerEntregas.length; i++) {
          for (let j = 0; j < this.dataSourceActividades.length; j++) {
            if (
              this.obtenerEntregas[i].id_entrega ==
              this.dataSourceActividades[j].id_actividad  &&
              this.dataSourceActividades[j].id_actividad == this.idActividad){
              const presentarLaActividad: PresentarActividad = {
                id_actividad: this.dataSourceActividades[j].id_actividad,
                id_entrega: this.obtenerEntregas[i].id_entrega,
                nombre_actividad: this.dataSourceActividades[j].nombre_actividad,
                descripcion_actividad: this.dataSourceActividades[j].descripcion_actividad,
                tipo_actividad: this.dataSourceActividades[j].tipo_actividad,
                fechaPublicacion_actividad: this.dataSourceActividades[j].fechaPublicacion_actividad,
                fechaVencimiento_actividad: this.dataSourceActividades[j].fechaVencimiento_actividad,
                fechaEnvio_entrega: this.obtenerEntregas[j].fechaEnvio_entrega,
                fechaModificacion_entrega: this.obtenerEntregas[i].fechaModificacion_entrega,
                actividad_entrega: this.obtenerEntregas[i].actividad_entrega,
                archivo_entrega: this.obtenerEntregas[i].archivo_entrega,
                calificacion_entrega: Number(this.obtenerEntregas[i].calificacion_entrega),
                estado_entrega: this.obtenerEntregas[i].estado_entrega,

              };
              this.presentarActividad.push(presentarLaActividad);
            }
          }
        }
        console.log(this.presentarActividad);
      });
    });
  }

  regresar(){
    this.router.navigate(['/estudiante/cursos']);
  }
}
