import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from '../../models/docenteModel';
import { MateriaDocente } from '../../models/materiaDocenteModel';
import { DocenteAdministracionService } from '../../services/docente-administracion.service';


@Component({
  selector: 'app-ver-docente-administracion',
  templateUrl: './ver-docente-administracion.component.html',
  styleUrls: ['./ver-docente-administracion.component.css']
})
export class VerDocenteAdministracionComponent implements OnInit {
  datosDocentes: Docente[] = [];
  docente: Docente={
    id_docente: 0,
    cedula_docente: '',
    nombresCompletos_docente: '',
    ciclo_contrato: '',
    estado_docente: '',
    tipo_contrato: ''
  };
  datosMateriasDocente: MateriaDocente[] = [];

  displayedColumns: string[] = ['id', 'materia', 'paralelo', 'evaluo', 'calificacion'];

  id: number=0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('id_docente'));

    this.docente=history.state.data;
    this.docenteService.obtenerEvaluacionesDocentes(this.id).subscribe(data => {
      this.datosMateriasDocente=data.data
    
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
    });
    
  }

  volver(){
    this.router.navigate(['/administracion/docente-administracion']);
  }
  
}
