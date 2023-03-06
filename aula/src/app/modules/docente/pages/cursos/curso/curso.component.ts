import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CursoModel } from '../../../models/cursoModel';
import { DocentesService } from '../../../services/docentes.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  curso!: CursoModel;
  opcionSeleccionada = 'actividades';
  mostrarContenido = false;

  constructor(private modalService: NgbModal, private _docentesService: DocentesService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.curso=history.state.data;
    this.goActividades();
    
  }

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  goActividades() {
    this.router.navigate(['actividades'], { relativeTo: this.route, state: { curso: this.curso } });
  }

  goCalificaciones() {
    this.router.navigate(['calificaciones'], { relativeTo: this.route, state: { curso: this.curso } });
  }


}
