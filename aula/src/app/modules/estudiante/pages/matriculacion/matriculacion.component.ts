import { Component,OnChanges} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import{matriculacionService} from './services/matriculacion.service';
import { CookieService } from 'ngx-cookie-service';
import { horarioMatriculacion } from '../../models/horarioMatriculacion.model';
import { CursoHorario } from '../../models/cursoHorario.model';
import{Curso} from '../../models/curso.model';
import { paralelo } from '../../models/paralelo.model';
import{Materias} from '../../models/materias.model';



@Component({
  selector: 'app-matriculacion',
  templateUrl: './matriculacion.component.html',
  styleUrls: ['./matriculacion.component.css']
})
export class MatriculacionComponent implements OnChanges{
  selected = '';
  horarioMatriculacion:horarioMatriculacion[] = [];
  cursoHorario:CursoHorario[]= [];
  curso:Curso[] = [];
  paralelo:paralelo[] = [];
  materias:Materias[] = [];
  modulo:number=0;
  seleccionado:number=0;
  asignaturas:any[] = [];
  


  displayedColumns = ['accion','nombre_paralelo','docente_curso','dia_horario1','dia_horario2','dia_horario3','dia_horario4','dia_horario5'];
  dataSource: any = []; 
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private matriculacionService: matriculacionService, private cookie: CookieService) {}

  ngOnInit() {

    this.matriculacionService.obtenerMaterias().subscribe(data=>{
      this.materias = data.data;
      console.log(this.materias);
    });

      this.matriculacionService.obtenerHorariosmatricula(1).subscribe(data=>{
        this.cursoHorario = data.data; 
        console.log(this.cursoHorario);
        this.matriculacionService.obtenercurso().subscribe(data=>{
          this.curso = data.data;
          console.log(this.curso);
       });
       
      });
     
      this.matriculacionService.obtenerParalelo().subscribe(data=>{
        this.paralelo = data.data;
        console.log(this.paralelo);
      });

      
      
   }

    ngOnChanges(){ 
        }


    onSelect(event: any) {
      this.seleccionado = Number(event.value);
      console.log(this.seleccionado);

      let nombre_materia= ["s"]
      this.matriculacionService.obtenerMaterias().subscribe(data=>{
        this.materias = data.data;
        nombre_materia=[]
       for (let i = 0; i < this.materias.length; i++) { 
          if(this.materias[i].modulo_materia == this.seleccionado){
            nombre_materia.push(this.materias[i].nombre_materia);
          }
       }  
        let arregloSinRepetidos = nombre_materia.filter((valor, indice) => {
          return nombre_materia.indexOf(valor) === indice;
        });
        this.asignaturas = arregloSinRepetidos;

            });
 


    }
    
 }
