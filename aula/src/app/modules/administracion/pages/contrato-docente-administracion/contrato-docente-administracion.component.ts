import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contrato-docente-administracion',
  templateUrl: './contrato-docente-administracion.component.html',
  styleUrls: ['./contrato-docente-administracion.component.css']
})
export class ContratoDocenteAdministracionComponent implements OnInit{
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ContratoDocenteAdministracionComponent>) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: new FormControl(''),
      email: new FormControl('')
    });
  }

  enviar() {
    console.log(this.formulario.value);
  }
  cerrar(){
    this.dialogRef.close();
  }
  filtro: string[] = [
    'Matutina',
    'Vespertina',
    'Nocturna',
  ];
  tipo: string[] = [
    'Automatico 1',
    'Automatico 2',
    'Automatico 3',
  ];
}
