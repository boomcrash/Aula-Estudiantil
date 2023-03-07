import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { CursoModel } from '../../models/cursoModel';
import { DocentesService } from '../../services/docentes.service';
import { GenerandoModalComponent } from './generando-modal/generando-modal.component';


@Component({
  selector: 'app-acta',
  templateUrl: './acta.component.html',
  styleUrls: ['./acta.component.css']
})
export class ActaComponent {
  cursos!: CursoModel[];
  curso!: CursoModel;
  isOpen = false;
  acta = false;
  id = parseInt(this.cookie.get('id'));
  selectedOption = "Seleccionar";
  selectedOption2 = "Curso";
  inputPlaceholder = "Nombre de la actividad";

  options = [
    { value: 1, label: 'Actividad' },
    { value: 2, label: 'Estudiante' },
  ];

  constructor(private modalService: NgbModal, private _docentesService: DocentesService, private route: ActivatedRoute, private cookie: CookieService, private router: Router) { }

  
  ngOnInit(): void {

    this._docentesService.obtenerIdDocente(this.id).subscribe( docente => {
      this._docentesService.obtenerCursos(docente.data[0].id_docente).subscribe( data => {
        this.cursos = data.data;
      })  
    })
    
    
  }

  openGenerar(): void {
    const modalRef = this.modalService.open(GenerandoModalComponent, { centered: true, size: 'md', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.curso = this.curso;
    modalRef.closed.subscribe( data => {
      this.acta = true
    })

  }

  toggleSelect() {
    this.isOpen = !this.isOpen;
  }

  selectOption(curso: CursoModel) {
    this.selectedOption = curso.nombre_materia.toString();
    this.selectedOption2 = curso.nombre_paralelo.toString();
    this.curso = curso;
    this.acta = false

    this.isOpen = false;
    if (this.selectedOption === 'Actividad') {
      this.inputPlaceholder = 'Nombre de la actividad';
    } else if (this.selectedOption === 'Estudiante') {
      this.inputPlaceholder = 'Nombre del estudiante';
    }
  }

}
