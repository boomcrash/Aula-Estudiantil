import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { DocentesService } from 'src/app/modules/docente/services/docentes.service';
import { CursosService } from '../cursos/services/cursos.service';
import { CursoModel } from '../../models/cursoModel';
import { ParticipantesService } from '../participantes/servicios/services/participantes.service';
import { ParticipanteModel } from 'src/app/modules/docente/models/participanteModel';









@Component({
  selector: 'app-evaluacion-docente',
  templateUrl: './evaluacion-docente.component.html',
  styleUrls: ['./evaluacion-docente.component.css']
})
export class EvaluacionDocenteComponent implements OnInit {
  selected = '';
  id = JSON.parse(localStorage.getItem("Usuario")!).id_usuario;
  curso!: CursoModel[];
  docente = '';
  listaParticipantes!: ParticipanteModel[];

  isOpen = false;

  selectedOption = "Seleccione una materia";





  criterio1: number = 0;
  criterio2: number = 0;
  criterio3: number = 0;
  criterio4: number = 0;
  criterio5: number = 0;
  criterio6: number = 0;
  criterio7: number = 0;
  criterio8: number = 0;
  criterio9: number = 0;
  criterio10: number = 0;
  resultado: number = 0;

  promedio() {
    this.resultado = (this.criterio1 + this.criterio2 + this.criterio3 + this.criterio4 + this.criterio5 + this.criterio6 + this.criterio7 + this.criterio8 + this.criterio9 + this.criterio10) / 10;
    console.log(this.resultado);

  }

  constructor(private cursosService: CursosService, private participantes: ParticipantesService) { }
  ngOnInit() {


    this.cursosService.obtenerDatosEstudiante(this.id).subscribe((data) => {
      console.log(data);
      this.cursosService
        .obtenerCurso(data.data[0].id_estudiante)
        .subscribe((dato) => {
          console.log(dato);
          this.curso = dato.data;
        });

    });
  }


  toggleSelect() {
    this.isOpen = !this.isOpen;
  }


  selectOption(option: any) {
    this.selectedOption = option.nombre_materia;
    this.isOpen = false;
    this.docente = option.nombre_docente;


    this.participantes.ObtenerParticipantes(option.id_curso).subscribe((data) => {
      console.log(data);
      this.listaParticipantes = data.data;
      console.log(this.listaParticipantes);

      this.docente=this.listaParticipantes.filter(participante =>
        participante.rol_participante.includes("Docente")
      )[0].nombrescompletos_participante;
  

    }


    )

  }
}





