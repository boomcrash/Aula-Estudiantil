import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CursoModel } from '../../../models/cursoModel';
import { ParticipanteModel } from '../../../models/participanteModel';
import { DocentesService } from '../../../services/docentes.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css']
})
export class AsistenciasComponent {
  public curso!: CursoModel;
  public participantes!: ParticipanteModel[];
  


  constructor(
    private modalService: NgbModal,
    private _docentesService: DocentesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.curso = history.state.curso;
    this._docentesService.obtenerParticipantes(this.curso.id_curso).subscribe(data => {
      this.participantes = data.data.filter((participante: { rol_participante: string; }) => participante.rol_participante === 'Estudiante');
      console.log(this.participantes)
    })
  }

}
