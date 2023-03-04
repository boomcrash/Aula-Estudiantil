import { Component, HostListener, OnInit } from '@angular/core';
import { CursoModel } from '../../../models/cursoModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarActividadModalComponent } from './agregar-actividad-modal/agregar-actividad-modal.component';
import { ModificarActividadModalComponent } from './modificar-actividad-modal/modificar-actividad-modal.component';
import { InformacionActividadModalComponent } from './informacion-actividad-modal/informacion-actividad-modal.component';
import { BorrarActividadModalComponent } from './borrar-actividad-modal/borrar-actividad-modal.component';
import { DocentesService } from '../../../services/docentes.service';
import { ActividadModel } from '../../../models/actividadModel';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  curso!: CursoModel;
  actividades!: ActividadModel[];
  public mostrarContenido = false;

  constructor(private modalService: NgbModal, private _docentesService: DocentesService) { }

  ngOnInit(): void {
    this.curso=history.state.data;
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
