import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Docente } from '../../models/docenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';
import { ActivatedRoute } from '@angular/router';


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

  constructor(
    private fb: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data: { id_docente: number, nombre_docente: string},
    private route: ActivatedRoute,
    private docenteService:DocenteAdministracionService,
    private dialogRef: MatDialogRef<ContratoDocenteAdministracionComponent>) {
      this.id_docente= data.id_docente;
      this.nombre_docente= data.nombre_docente;
     }

  ngOnInit(): void {
    

    
    
}

  enviar() {
    console.log(this.formulario.value);
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
