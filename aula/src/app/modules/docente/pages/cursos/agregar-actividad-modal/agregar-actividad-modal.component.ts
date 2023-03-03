import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-actividad-modal',
  templateUrl: './agregar-actividad-modal.component.html',
  styleUrls: ['./agregar-actividad-modal.component.css']
})
export class AgregarActividadModalComponent {
  actividaForm!: FormGroup;

  constructor(private router: Router, public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.actividaForm = this.formBuilder.group({
      fechaVencimiento_actividad: [''],
      fechaPublicacion_actividad: [''],
      nombre_actividad: [''],
      descripcion_actividad : [''],
      archivosPermitidos_actividad : [''],
      tipo_actividad : [''],
      estado_actividad : [''],
    }
    );

  }

  onSubmit(){

  }


}
