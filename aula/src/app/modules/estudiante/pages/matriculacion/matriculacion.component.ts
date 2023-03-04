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
  asignaturaSeleccionada: string = '';
  


  displayedColumns = ['accion','paralelo_curso','curso_cupo','dia_horario1','dia_horario2','dia_horario3','dia_horario4','dia_horario5'];
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
    this.matriculacionService.obtenerHorariosmatricula(1).subscribe(data=>{
      this.cursoHorario = data.data;       
      this.matriculacionService.obtenercurso().subscribe(data=>{
        this.curso = data.data;        
      });       
    });     
    this.matriculacionService.obtenerParalelo().subscribe(data=>{
      this.paralelo = data.data;      
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

  onSelectMateria(event: any){
    let cursoHorarioProvicional:CursoHorario[]= [];
    this.asignaturaSeleccionada = event.value;
    const findElementId = this.materias.find(item => item.nombre_materia === this.asignaturaSeleccionada);      

    for(let i = 0;i<this.curso.length;i++){
      if(this.curso[i].materia_curso == findElementId?.id_materia){
        for(let j = 0;j<this.cursoHorario.length;j++){
          if(this.curso[i].id_curso == this.cursoHorario[j].curso_horario){
            cursoHorarioProvicional.push(this.cursoHorario[j])
          }
        }        
        for(let j = 0; j<this.paralelo.length;j++){
          if(this.curso[i].paralelo_curso == this.paralelo[j].id_paralelo){
            const horarioMatriculacion:horarioMatriculacion={
              paralelo_curso:this.paralelo[j].nombre_paralelo,
              cupo_curso:40-this.curso[i].estudiantes_curso,         
              horario_ordenado:[
              {
                dia_horario: '',
                hora: '',                      
              },
              {
                dia_horario: '',
                hora: '',                      
              },
              {
                dia_horario: '',
                hora: '',                      
              },
              {
                dia_horario: '',
                hora: '',                      
              },
              {
                dia_horario: '',
                hora: '',                      
              }
            ]
          }; 
          this.horarioMatriculacion.push(horarioMatriculacion);   
          }
        }
      }
    }  
  
    for(let j = 0;j<this.horarioMatriculacion.length;j++){
      for(let k = 0;k<cursoHorarioProvicional.length;k++){
        if(cursoHorarioProvicional[k].dia_horario=="Lunes"){
          this.horarioMatriculacion[j].horario_ordenado[0].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[0].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;            
        }            
        if(cursoHorarioProvicional[k].dia_horario=="Martes"){
          this.horarioMatriculacion[j].horario_ordenado[1].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[1].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;      
        } 
        if(cursoHorarioProvicional[k].dia_horario=="Miércoles"){
          this.horarioMatriculacion[j].horario_ordenado[2].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[2].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;      
        } 
        if(cursoHorarioProvicional[k].dia_horario=="Jueves"){
          this.horarioMatriculacion[j].horario_ordenado[3].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[3].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;      
        } 
        if(cursoHorarioProvicional[k].dia_horario=="Viernes"){
          this.horarioMatriculacion[j].horario_ordenado[4].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[4].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;      
        }         
      }        
    }
    
  console.log(this.horarioMatriculacion)   
      
  }      
}
