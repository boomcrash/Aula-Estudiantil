import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContratoDocenteAdministracionComponent } from '../contrato-docente-administracion/contrato-docente-administracion.component';
import { Docente } from '../../models/docenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-docente-administracion',
  templateUrl: './docente-administracion.component.html',
  styleUrls: ['./docente-administracion.component.css']
})
export class DocenteAdministracionComponent implements OnInit {
  datosDocentes: Docente[] = [];
  docente: Docente={
    id_docente: 0,
    cedula_docente: '',
    nombresCompletos_docente: '',
    ciclo_contrato: '',
    estado_docente: '',
    tipo_contrato: ''
  };

  displayedColumns: string[] = ['id', 'cedula', 'nombreCompleto', 'ciclo', 'estado', 'contrato','acciones'];
  id: number=0;
  
  filtro: string[] = [
    'Cedula',
    'Nombre',
    'Ciclo',
    'Estado',
    'Contrato',
  ];

  opciones: string[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3',
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    
    this.docenteService.obtenerDocentes().toPromise().then(respuesta =>{
      this.datosDocentes=respuesta.data;
      for(let i=0;i<this.datosDocentes.length;i++){
        if(this.datosDocentes[i].id_docente==this.id){
          this.docente=this.datosDocentes[i]
        }
      }
      console.log(this.docente);
    }).catch(err =>{
      console.error(err);
    });
  }
  
  mostrarPagos() {
    this.router.navigate(['/administracion/pagos-docente-administracion']);
  }

  mostrarDialogoContrato(nombre_docente: string, id_docente: number) {
    this.dialog.open(ContratoDocenteAdministracionComponent,{
      data: {nombre_docente: nombre_docente, id_docente: id_docente},
      width: '700px'
    });
  }

  verMateriasDocente(id: number) {
    this.router.navigate(['/administracion/ver-docente-administracion'],
    { relativeTo:  this.route, queryParams: {id_docente:id} });
  }
}


