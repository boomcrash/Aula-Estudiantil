import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActividadModel } from '../../../models/actividadModel';

@Component({
  selector: 'app-modificar-actividad-modal',
  templateUrl: './modificar-actividad-modal.component.html',
  styleUrls: ['./modificar-actividad-modal.component.css']
})
export class ModificarActividadModalComponent {
  actividaForm!: FormGroup;
  @Input() public actividad!: ActividadModel;


  constructor(private router: Router, public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.actividaForm = this.formBuilder.group({
      fechaVencimiento_actividad: [this.actividad.fechaVencimiento_actividad],
      fechaPublicacion_actividad: [this.actividad.fechaPublicacion_actividad],
      nombre_actividad: [this.actividad.nombre_actividad],
      descripcion_actividad : [this.actividad.descripcion_actividad],
      archivosPermitidos_actividad : [this.actividad.archivosPermitidos_actividad],
      tipo_actividad : [this.actividad.tipo_actividad],
      estado_actividad : [],
    }
    );

  }

  onSubmit(){

  }
}
