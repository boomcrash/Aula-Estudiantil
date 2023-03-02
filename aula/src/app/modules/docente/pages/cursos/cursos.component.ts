import { Component, OnInit } from '@angular/core';
import { CursoModel } from '../../models/cursoModel';
import { DocentesService } from '../../services/docentes.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos!: CursoModel[];

  constructor(private _docentesService: DocentesService) { }

  ngOnInit(): void {
    this._docentesService.obtenerCursos(1).subscribe( data => {
      this.cursos = data.data;
      console.log(this.cursos)
    })
    
  }

}
