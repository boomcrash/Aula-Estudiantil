import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoModel } from '../../models/cursoModel';
import { CursosService } from './services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos!: CursoModel[];
  id = parseInt(this.cookie.get('id'));
  usuarios: any;
  displayedColumns = ['id_curso,nombre_materia,modulo_materia,nombre_paralelo,docente_curso,dia_horario,hora_horario'];

  constructor(private cursosService: CursosService, private router: Router, private activatedRoute: ActivatedRoute, private cookie: CookieService) { }

  ngOnInit(): void {
    

    this.cursosService.obtenerCurso(this.id).subscribe( data => {
      this.cursos = data.data;
      console.log(this.cursos);
    })

    
  }

  goCurso(indice: number){
    this.router.navigate([this.cursos[indice].nombre_materia], {relativeTo: this.activatedRoute, state: {data:this.cursos[indice]}}); 
  }

}
