import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActividadModel } from 'src/app/modules/docente/models/actividadModel';
import { DocentesService } from 'src/app/modules/docente/services/docentes.service';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-modificar-actividad-modal',
  templateUrl: './modificar-actividad-modal.component.html',
  styleUrls: ['./modificar-actividad-modal.component.css'],

})

export class ModificarActividadModalComponent implements OnInit {
  actividaForm!: FormGroup;
  @Input() public actividad!: ActividadModel;


  constructor(private router: Router, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private _docentesService: DocentesService, private datePipe: DatePipe) {

  }


  ngOnInit(): void {
    const date = new Date(this.actividad.fechaVencimiento_actividad);
    date.setDate(date.getDate() + 1);
    const fecha = date.toISOString().slice(0, 10);

    this.actividaForm = this.formBuilder.group({
      fechaVencimiento_actividad: [fecha],
      fechaPublicacion_actividad: [this.actividad.fechaPublicacion_actividad],
      nombre_actividad: [this.actividad.nombre_actividad],
      descripcion_actividad: [this.actividad.descripcion_actividad],
      archivosPermitidos_actividad: [this.actividad.archivosPermitidos_actividad],
      tipo_actividad: [this.actividad.tipo_actividad],
    }
    );
  }

  onSubmit() {

    var actividad = {
      id_actividad: this.actividad.id_actividad,
      curso_actividad: this.actividad.curso_actividad,
      fechaPublicacion_actividad: this.actividad.fechaPublicacion_actividad,
      fechaVencimiento_actividad: this.convertirFecha(this.actividaForm.controls["fechaVencimiento_actividad"].value),
      nombre_actividad: this.actividaForm.controls["nombre_actividad"].value,
      descripcion_actividad: this.actividaForm.controls["descripcion_actividad"].value,
      archivosPermitidos_actividad: this.actividaForm.controls["archivosPermitidos_actividad"].value,
      tipo_actividad: this.actividaForm.controls["tipo_actividad"].value,
      envios: this.actividad.envios
    }

    this._docentesService.modificarActividad(actividad).subscribe(data => {
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
