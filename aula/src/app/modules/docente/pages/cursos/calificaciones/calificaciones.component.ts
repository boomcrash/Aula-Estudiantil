import { Component, HostListener, OnInit } from '@angular/core';
import { CursoModel } from '../../../models/cursoModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarActividadModalComponent } from '../actividades/agregar-actividad-modal/agregar-actividad-modal.component';
import { ModificarActividadModalComponent } from '../actividades/modificar-actividad-modal/modificar-actividad-modal.component';
import { InformacionActividadModalComponent } from '../actividades/informacion-actividad-modal/informacion-actividad-modal.component';
import { BorrarActividadModalComponent } from '../actividades/borrar-actividad-modal/borrar-actividad-modal.component';
import { DocentesService } from '../../../services/docentes.service';
import { ActividadModel } from '../../../models/actividadModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent {
  curso!: CursoModel;
  actividades!: ActividadModel[];
  public mostrarContenido = false;

  constructor(private modalService: NgbModal, private _docentesService: DocentesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.curso = history.state.curso;
    this.obtenerActividades();
    this._docentesService.getUpdate().subscribe((value: boolean) => {
      if(value) {
        this.obtenerActividades();
      }
    })
  }

  obtenerActividades() {
    this._docentesService.obtenerActividades(this.curso.id_curso).subscribe(data => {
      this.actividades=data.data
    });
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
