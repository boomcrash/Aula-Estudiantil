import { Component, OnChanges, ViewChild } from '@angular/core';
import {FormBuilder, Validators,FormGroup, FormControl} from '@angular/forms';
import{matriculacionService} from './services/matriculacion.service';
import { CookieService } from 'ngx-cookie-service';
import { horarioMatriculacion } from '../../models/horarioMatriculacion.model';
import { CursoHorario } from '../../models/cursoHorario.model';
import { EstudiantePerfil } from '../../models/estudianteperfil.model';
import { Curso } from '../../models/curso.model';
import { paralelo } from '../../models/paralelo.model';
import { Materias } from '../../models/materias.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatTable } from '@angular/material/table';
import { ActaService } from '../acta/services/acta.service';
import{MatTableDataSource} from '@angular/material/table';
import { ActaCalificacion } from '../../models/actacalificacion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matriculacion',
  templateUrl: './matriculacion.component.html',
  styleUrls: ['./matriculacion.component.css']
})
export class MatriculacionComponent implements OnChanges {
  @ViewChild(MatTable) table!: MatTable<any>;
  selected = '';
  horarioMatriculacion: horarioMatriculacion[] = [];
  horarioMatriculado: horarioMatriculacion[] = [];
  horarioMatriculado2: horarioMatriculacion[] = [];
  cursoHorario: CursoHorario[] = [];  
  curso: Curso[] = [];
  paralelo: paralelo[] = [];
  materias: Materias[] = [];
  modulo: number = 0;
  seleccionado: number = 0;
  asignaturas: any[] = [];
  asignaturaSeleccionada: string = '';
  id = this.cookie.get('id');
  datosCompletos: EstudiantePerfil | any = null;
  datosActaCalifiacion: ActaCalificacion[] = [];
  materiasReprobadas: any[] = [];
  materiasAprobadas: any[] = [];
  mostrarHorario: boolean = true;
  mostrarHorario2: boolean = true;

  displayedColumns = ['accion', 'paralelo_curso', 'curso_cupo', 'dia_horario1', 'dia_horario2', 'dia_horario3', 'dia_horario4', 'dia_horario5', 'dia_horario6', 'dia_horario7'];
  displayedColumns2 = ['accion', 'materia', 'paralelo_curso', 'curso_cupo', 'dia_horario1', 'dia_horario2', 'dia_horario3', 'dia_horario4', 'dia_horario5', 'dia_horario6', 'dia_horario7'];
  dataSource: any = [];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    select : ['', Validators.required],
    select2 : ['', Validators.required],
    tabla: ['', Validators.required]
    
});
     tarjetaForm = new FormGroup({
    secondCtrl: new FormControl ('', [Validators.required]),
    numero_tarjeta:new FormControl ('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]),
    nombre_titular:new FormControl ('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    fecha:new FormControl ('',[Validators.required]),
    cvv:new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]*$')])
  });
  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder, 
    private matriculacionService: matriculacionService, 
    private cookie: CookieService,
    private autentificar: AuthService,
    private acta:ActaService,
    private router: Router
    ) { }
  

  ngOnInit() {
    this.autentificar.obtenerDatosCompletos(this.id).toPromise().then( resp =>{
      this.datosCompletos = resp.data;        
      this.acta.obtenerEstudianteItemActa(this.datosCompletos[0].id_estudiante).toPromise().then( respuesta =>{
        console.log(this.datosCompletos[0].id_estudiante)
        this.datosActaCalifiacion = respuesta.data;
        for(let i=0;i<this.datosActaCalifiacion.length;i++){
          if(this.datosActaCalifiacion[i].estado_itemActa != 'APROBADO'){
            this.materiasReprobadas.push(this.datosActaCalifiacion[i].nombre_materia);            
          }
          if(this.datosActaCalifiacion[i].estado_itemActa != 'REPROBADO'){
            this.materiasAprobadas.push(this.datosActaCalifiacion[i].nombre_materia);            
          }
        }
        console.log(this.materiasReprobadas);
        console.log(this.datosActaCalifiacion);
      }).catch(
          err => {
            console.error(err);
            return false;
          }
        );       

    }).catch(
      err => {
        console.error(err);
        return false;
      }
    ); 
    this.matriculacionService.obtenerHorariosmatricula(2).subscribe(data => {
      this.cursoHorario = data.data;
      this.matriculacionService.obtenercurso().subscribe(data => {
        this.curso = data.data;
      });
    });
    this.matriculacionService.obtenerParalelo().subscribe(data => {
      this.paralelo = data.data;
    });
  }

  ngOnChanges() {

  }


  onSelect(event: any) {
    this.mostrarHorario = true;   
    this.mostrarHorario2 = true;         
    this.seleccionado = Number(event.value);
    console.log(this.seleccionado);
    let nombre_materia = ["s"]
    this.matriculacionService.obtenerMaterias().subscribe(data => {
      this.materias = data.data;
      nombre_materia = []
      for (let i = 0; i < this.materias.length; i++) {
        if (this.materias[i].modulo_materia == this.seleccionado) {
          nombre_materia.push(this.materias[i].nombre_materia);
        }
      }      
      let arregloSinRepetidos = nombre_materia.filter((valor, indice) => {
      return nombre_materia.indexOf(valor) === indice;
      });
      let arreglo2 = arregloSinRepetidos;
      if(this.seleccionado == 1){
        for(let i = 0; i < this.materiasReprobadas.length; i++){
          for(let j = 0; j < arregloSinRepetidos.length; j++){
            if(this.materiasReprobadas[i] != arregloSinRepetidos[j]){
              arregloSinRepetidos.splice(j, 1); // Elimina la materia en el índice j
              j--; // Disminuye j para que no se salte la materia siguiente
            }            
          }          
        }
        for(let i = 0; i < this.materiasAprobadas.length; i++){
          for(let j = 0; j < arregloSinRepetidos.length; j++){
            if(this.materiasAprobadas[i] == arregloSinRepetidos[j]){
              console.log(this.materiasAprobadas[i] )
              arregloSinRepetidos.splice(j, 1); // Elimina la materia en el índice j
              j--; // Disminuye j para que no se salte la materia siguiente
            }            
          }          
          this.asignaturas = arregloSinRepetidos;
        }
      }else if(this.seleccionado == 2){                        
        if(this.materiasAprobadas.length == 5){
          this.mostrarHorario2 = true;              
          this.asignaturas = arreglo2;       
        }else{
          this.mostrarHorario2 = false;             
        }
      }            
      if(this.asignaturas.length == 0 && this.seleccionado == 1){
        this.asignaturas = arregloSinRepetidos;                
        this.mostrarHorario = false;        
      }            
    });
  }

  onSelectMateria(event: any) {
    this.mostrarHorario = true;   
    this.mostrarHorario2 = true;      
    this.horarioMatriculacion = []
    let cursoHorarioProvicional: CursoHorario[] = [];
    let findElementId
    if(event.value){
      this.asignaturaSeleccionada = event.value;
      findElementId = this.materias.find(item => item.nombre_materia === this.asignaturaSeleccionada);
    }else{
      this.asignaturaSeleccionada = event.materia;
      console.log(this.asignaturaSeleccionada)
      findElementId = this.materias.find(item => item.nombre_materia === this.asignaturaSeleccionada);
    }
    
    console.log(findElementId)
    for (let i = 0; i < this.curso.length; i++) {
      if (this.curso[i].materia_curso == findElementId?.id_materia) {
        for (let j = 0; j < this.cursoHorario.length; j++) {
          if (this.curso[i].id_curso == this.cursoHorario[j].curso_horario) {
            cursoHorarioProvicional.push(this.cursoHorario[j])
          }
        }
        for (let j = 0; j < this.paralelo.length; j++) {
          if (this.curso[i].paralelo_curso == this.paralelo[j].id_paralelo) {
            const horarioMatriculacion: horarioMatriculacion = {
              materia: findElementId.nombre_materia,
              paralelo_curso: this.paralelo[j].nombre_paralelo,
              cupo_curso: 40 - this.curso[i].estudiantes_curso,
              horario_ordenado: [
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

    for (let j = 0; j < this.horarioMatriculacion.length; j++) {
      for (let k = 0; k < cursoHorarioProvicional.length; k++) {
        if (cursoHorarioProvicional[k].dia_horario == "Lunes") {
          this.horarioMatriculacion[j].horario_ordenado[0].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[0].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;
        }
        if (cursoHorarioProvicional[k].dia_horario == "Martes") {
          this.horarioMatriculacion[j].horario_ordenado[1].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[1].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;
        }
        if (cursoHorarioProvicional[k].dia_horario == "Miércoles") {
          this.horarioMatriculacion[j].horario_ordenado[2].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[2].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;
        }
        if (cursoHorarioProvicional[k].dia_horario == "Jueves") {
          this.horarioMatriculacion[j].horario_ordenado[3].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[3].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;
        }
        if (cursoHorarioProvicional[k].dia_horario == "Viernes") {
          this.horarioMatriculacion[j].horario_ordenado[4].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[4].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;
        }
        if (cursoHorarioProvicional[k].dia_horario == "Sabado") {
          this.horarioMatriculacion[j].horario_ordenado[5].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[5].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;
        }
        if (cursoHorarioProvicional[k].dia_horario == "Domingo") {
          this.horarioMatriculacion[j].horario_ordenado[6].dia_horario = cursoHorarioProvicional[k].dia_horario;
          this.horarioMatriculacion[j].horario_ordenado[6].hora = cursoHorarioProvicional[k].horaInicio_horario + " - " + cursoHorarioProvicional[k].horaFin_horario;
        }
      }
    }
  }

  add(event: any) {        
    console.log(event)
    const horarioMatriculacion: horarioMatriculacion = {
      materia: event.materia,
      paralelo_curso: event.paralelo_curso,
      cupo_curso: event.cupo_curso,
      horario_ordenado: [
        {
          dia_horario: event.horario_ordenado[0].dia_horario,
          hora: event.horario_ordenado[0].hora,
        },
        {
          dia_horario: event.horario_ordenado[1].dia_horario,
          hora: event.horario_ordenado[1].hora,
        },
        {
          dia_horario: event.horario_ordenado[2].dia_horario,
          hora: event.horario_ordenado[2].hora,
        },
        {
          dia_horario: event.horario_ordenado[3].dia_horario,
          hora: event.horario_ordenado[3].hora,
        },
        {
          dia_horario: event.horario_ordenado[4].dia_horario,
          hora: event.horario_ordenado[4].hora,
        },
        {
          dia_horario: event.horario_ordenado[5].dia_horario,
          hora: event.horario_ordenado[5].hora,
        },
        {
          dia_horario: event.horario_ordenado[6].dia_horario,
          hora: event.horario_ordenado[6].hora,
        }
      ]
    };    
    this.horarioMatriculado = [...this.horarioMatriculado, horarioMatriculacion];
    for(let i = 0; i<this.horarioMatriculado.length;i++){
      for(let j = 0; j < this.asignaturas.length;j++){
        if(this.horarioMatriculado[i].materia == this.asignaturas[j]){
          this.asignaturas.splice(j,1);
        }
      }
    }
    console.log(this.asignaturas);
    this.horarioMatriculacion = [];
    console.log(this.horarioMatriculado);
  }


  delete(event: any) { 
    let materia = event;
    console.log(materia)
    for(let i = 0; i<this.horarioMatriculado.length;i++){      
      if(this.horarioMatriculado[i].materia == materia.materia){       
        this.asignaturas.push(materia.materia);
        this.onSelectMateria(this.horarioMatriculado[i]);
        this.horarioMatriculado.splice(i,1);        
        this.horarioMatriculado = [...this.horarioMatriculado]; // create a new array reference to trigger change detection        
      }      
    }     
    
  console.log("hola",this.horarioMatriculacion)  
  this.dataSource = new MatTableDataSource<horarioMatriculacion>(this.horarioMatriculacion); 
 
      
  }     
  
  volver(){
    this.router.navigate(['/estudiante']);
  }
}
