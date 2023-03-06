import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocentesService } from '../../../../services/docentes.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-agregar-actividad-modal',
  templateUrl: './agregar-actividad-modal.component.html',
  styleUrls: ['./agregar-actividad-modal.component.css']
})
export class AgregarActividadModalComponent {
  actividaForm!: FormGroup;

  constructor(private router: Router, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private _docentesService: DocentesService, private datePipe: DatePipe) {
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

  onSubmit() {

    var actividad = {
      curso_actividad: 1,
      fechaPublicacion_actividad: "2023-03-04",
      fechaVencimiento_actividad: this.convertirFecha(this.actividaForm.controls["fechaVencimiento_actividad"].value),
      nombre_actividad: this.actividaForm.controls["nombre_actividad"].value,
      descripcion_actividad: this.actividaForm.controls["descripcion_actividad"].value,
      archivosPermitidos_actividad: this.actividaForm.controls["archivosPermitidos_actividad"].value,
      tipo_actividad: this.actividaForm.controls["tipo_actividad"].value,
    }

    this._docentesService.agregarActividad(actividad).subscribe(data => {
      console.log(data)
      this._docentesService.sendUpdate(true);
      this.activeModal.close();
    })

  }

  convertirFecha(fecha: string): string {
    var fechaConvertida = this.datePipe.transform(fecha, 'yyyy-MM-dd')!;
    console.log(fechaConvertida);
    return fechaConvertida!;
  }

}
