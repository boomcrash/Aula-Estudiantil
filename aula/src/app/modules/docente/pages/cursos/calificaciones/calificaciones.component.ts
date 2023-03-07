import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CursoModel } from '../../../models/cursoModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarActividadModalComponent } from '../actividades/agregar-actividad-modal/agregar-actividad-modal.component';
import { ModificarActividadModalComponent } from '../actividades/modificar-actividad-modal/modificar-actividad-modal.component';
import { InformacionActividadModalComponent } from '../actividades/informacion-actividad-modal/informacion-actividad-modal.component';
import { BorrarActividadModalComponent } from '../actividades/borrar-actividad-modal/borrar-actividad-modal.component';
import { DocentesService } from '../../../services/docentes.service';
import { ActividadModel } from '../../../models/actividadModel';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit, OnDestroy {
  curso!: CursoModel;
  actividades!: ActividadModel[];
  editar = false;
  editarIndex: number | null = null;
  isOpen = false;
  selectedOption = "Actividad";
  inputPlaceholder = "Nombre de la actividad";
  actividad!: ActividadModel;
  private subscription!: Subscription;
  filtro: string = '';




  options = [
    { value: 1, label: 'Actividad' },
    { value: 2, label: 'Estudiante' },
  ];

  public mostrarContenido = false;

  constructor(private modalService: NgbModal, private _docentesService: DocentesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const state = history.state;
    this.curso = state.curso;
    this.actividad = state.actividad;
    this.obtenerActividades();

    if (this.actividad) {
      this.filtro = this.actividad.nombre_actividad
    }

    this._docentesService.getUpdate().subscribe((value: boolean) => {
      if (value) {
        this.obtenerActividades();

      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  filtrar() {
    const valor = this.filtro.toLowerCase();
    return this.actividades.filter(calificacion =>
      calificacion.nombre_actividad.toLowerCase().includes(valor)
    );
  }

  async obtenerActividades() {
    const data = await this._docentesService.obtenerActividades(this.curso.id_curso).toPromise();
    this.actividades = data.data;
  
    // Array de promesas para almacenar las solicitudes de las entregas
    const promesasEntregas: any[] = [];
  
    // Para cada actividad, agregamos una promesa de obtener las entregas
    this.actividades.forEach((actividad) => {
      if (actividad.id_actividad) {
        promesasEntregas.push(this._docentesService.obtenerEntregas(this.curso.id_curso, actividad.id_actividad).toPromise());
      }
    });
  
    // Esperamos a que se resuelvan todas las promesas de obtener las entregas
    const entregas = await Promise.all(promesasEntregas);
  
    // Asociamos las entregas con las actividades
    console.log(entregas)
  }

  cambiarEditar() {
    this.editar = !this.editar;
  }

  toggleSelect() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any) {
    this.selectedOption = option.label;
    this.isOpen = false;
    if (this.selectedOption === 'Actividad') {
      this.inputPlaceholder = 'Nombre de la actividad';
    } else if (this.selectedOption === 'Estudiante') {
      this.inputPlaceholder = 'Nombre del estudiante';
    }
  }


  cambiarEditarIndex(index: number | null) {
    this.editarIndex = index;
  }

  openAgregar(): void {
    const modalRef = this.modalService.open(AgregarActividadModalComponent, { centered: true, size: 'md' });
  }

  openModificar(actividad: ActividadModel): void {
    const modalRef = this.modalService.open(ModificarActividadModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.actividad = actividad;

  }

  openInformacion(actividad: ActividadModel): void {
    const modalRef = this.modalService.open(InformacionActividadModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.actividad = actividad;

  }

  openBorrar(actividad: ActividadModel): void {
    const modalRef = this.modalService.open(BorrarActividadModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.actividad = actividad;

  }

}
