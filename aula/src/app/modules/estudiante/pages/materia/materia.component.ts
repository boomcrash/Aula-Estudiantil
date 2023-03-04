import { Component } from '@angular/core';
import { CursoModel } from '../../models/cursoModel';
import { ActividadesService } from './services/actividades.service';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos/services/cursos.service';
import { ActividadesModel } from '../../models/actividadesModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EntregaModel } from '../../models/EntregaModel';
import { presentarActividadesModel } from '../../models/presentarActividadesModel';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css'],
})
export class MateriaComponent {
  curso!: CursoModel;
  dataSourceActividades!: ActividadesModel[];
  obtenerEntregas!: EntregaModel[];
  actividades!: presentarActividadesModel[];
  public entregasActividades: any;

  public mostrarContenido = false;

  constructor(
    private http: HttpClient,
    private actividadService: ActividadesService,
  ) {}

  ngOnInit(): void {
    this.curso = history.state.data;

    this.actividadService.obtenerEntregas().subscribe(data => {
    this.obtenerEntregas=data.data;
    console.log(this.obtenerEntregas);
      this.actividadService.obtenerActividades(1,2).subscribe(data => {
        this.actividades=data.data;
        console.log(this.actividades);
        const entregaActividad: presentarActividadesModel = {
          nombre_actividad: '',
          estado_entrega: '',
          fechaVencimiento_actividad: '',
          calificacion_entrega: 0,
        };
        //this.presentarActividadesModel.push(entregaActividad);
        console.log(entregaActividad)
        
        this.entregasActividades = entregaActividad;
      });
    });
  }
}

