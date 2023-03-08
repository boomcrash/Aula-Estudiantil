import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  docente!: Docente;
  datosMateriasDocente: MateriaDocente[] = [];

  displayedColumns: string[] = ['id', 'materia', 'paralelo', 'evaluo', 'calificacion'];

  id: number=0;

  constructor(
    private route: ActivatedRoute,
    private docenteService:DocenteAdministracionService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('id_docente'));

    this.docente=history.state.data;
    this.docenteService.obtenerEvaluacionesDocentes(this.id).subscribe(data => {
      this.datosMateriasDocente=data.data
    });
  }

  
}
