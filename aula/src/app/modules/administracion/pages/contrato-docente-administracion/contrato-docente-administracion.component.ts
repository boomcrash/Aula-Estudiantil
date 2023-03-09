import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Docente } from '../../models/docenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contrato-docente-administracion',
  templateUrl: './contrato-docente-administracion.component.html',
  styleUrls: ['./contrato-docente-administracion.component.css']
})
export class ContratoDocenteAdministracionComponent implements OnInit{
  docente: Docente={
    id_docente: 0,
    cedula_docente: '',
    nombresCompletos_docente: '',
    ciclo_contrato: '',
    estado_docente: '',
    tipo_contrato: ''
  };
  formulario!: FormGroup;
  
  id_docente: Number=0;
  nombre_docente: string='';

  submitted = false;

  constructor(
    private fb: FormBuilder, 
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id_docente: number, nombre_docente: string},
    private route: ActivatedRoute,
    private docenteService:DocenteAdministracionService,
    private dialogRef: MatDialogRef<ContratoDocenteAdministracionComponent>) {
      this.id_docente= data.id_docente;
      this.nombre_docente= data.nombre_docente;

      this.formulario = this.formBuilder.group({
        docente_contrato: ['', [Validators.required]],
        fecha_contrato: [''],
        nombramiento_contrato: ['', [Validators.required]],
        especialidad_contrato: ['', Validators.required],
        tipo_contrato: ['', Validators.required],
        jornada_contrato: ['', Validators.required],
        sueldo_contrato: [''],
      },
        {
          validators: [],
          updateOn: 'submit'
        }
      );
     }

  ngOnInit(): void {
    
}

  enviar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }

    var contrato = {
      docente_contrato: 1,
      fecha_contrato: "2023-03-04",
      nombramiento_contrato: this.formulario.controls["nombramiento_contrato"].value,
      especialidad_contrato: this.formulario.controls["especialidad_contrato"].value,
      tipo_contrato: this.formulario.controls["tipo_contrato"].value,
      jornada_contrato: this.formulario.controls["jornada_contrato"].value,
      sueldo_contrato: this.formulario.controls["sueldo_contrato"].value,
    }

    this.docenteService.agregarContratoDocentes(contrato).subscribe(data => {
      console.log(data)
      this.docenteService.sendUpdate(true);
      this.activeModal.close();
    })
  }
  cerrar(){
    this.dialogRef.close();
  }
  filtro: string[] = [
    'Medio Tiempo',
    'Tiempo Completo',
  ];
  tipo: string[] = [
    'Docente Titular',
    'Técnico Docente',
  ];
}
