import { Component } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import{Horario} from '../../models/Horario.model';
import { evaluacionService } from './services/evaluacion.service';
import { CookieService } from 'ngx-cookie-service';
import { Horario2 } from '../../models/Horario2.model';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {

  displayedColumns = ['nombre_materia','modulo_materia','nombre_paralelo','docente_curso','dia_horario1','dia_horario2','dia_horario3','dia_horario4','dia_horario5'];
  dataSource: any = []; 
  horario!:Horario[];
  horario2:Horario2[]= [];
  id = parseInt(this.cookie.get('id'));


  constructor(private evaluacionService: evaluacionService, private cookie: CookieService ) { }
  

   ngOnInit() {
  let nombre_materia= ["s"]
     this.evaluacionService.obtenerHorarios(this.id).subscribe(data=>{
      this.horario = data.data;
      nombre_materia=[]
      for (let i = 0; i < this.horario.length; i++) { 
        nombre_materia.push(this.horario[i].nombre_materia);  }
        let arregloSinRepetidos = nombre_materia.filter((valor, indice) => {
          return nombre_materia.indexOf(valor) === indice;
        });

        console.log(arregloSinRepetidos);
        for(let i=0;i<arregloSinRepetidos.length;i++){
            const Horario_Ordenado:Horario2={
              nombre_materia:arregloSinRepetidos[i],
              modulo_materia:0,
              nombre_paralelo:'',
              docente_curso:'',
              horario_ordenado:[
                {
                dia_horario:"",
                hora_horario:""
               },
               {
                dia_horario:"",
                hora_horario:""
               },
               {
                dia_horario:"",
                hora_horario:""
               },
               {
                dia_horario:"",
                hora_horario:""
               },
               {
                dia_horario:"",
                hora_horario:""
               }
            ]
              };
          
            this.horario2.push(Horario_Ordenado);
        }
        for (let i = 0; i < this.horario.length; i++) { 
          for(let j=0;j<this.horario2.length;j++){
            if(this.horario[i].nombre_materia==this.horario2[j].nombre_materia){
              this.horario2[j].modulo_materia=this.horario[i].modulo_materia;
              this.horario2[j].nombre_paralelo=this.horario[i].nombre_paralelo;
              this.horario2[j].docente_curso=this.horario[i].docente_curso;
              if(this.horario[i].dia_horario=="Lunes"){
                this.horario2[j].horario_ordenado[0].dia_horario=this.horario[i].dia_horario;
                this.horario2[j].horario_ordenado[0].hora_horario=this.horario[i].hora_horario;
              }
              if(this.horario[i].dia_horario=="Martes"){
                this.horario2[j].horario_ordenado[1].dia_horario=this.horario[i].dia_horario;
                this.horario2[j].horario_ordenado[1].hora_horario=this.horario[i].hora_horario;
              }
              if(this.horario[i].dia_horario=="Miércoles"){ 
                this.horario2[j].horario_ordenado[2].dia_horario=this.horario[i].dia_horario;
                this.horario2[j].horario_ordenado[2].hora_horario=this.horario[i].hora_horario;
              }
              if(this.horario[i].dia_horario=="Jueves"){          
                this.horario2[j].horario_ordenado[3].dia_horario=this.horario[i].dia_horario;
                this.horario2[j].horario_ordenado[3].hora_horario=this.horario[i].hora_horario;
              }
              if(this.horario[i].dia_horario=="Viernes"){ 
                this.horario2[j].horario_ordenado[4].dia_horario=this.horario[i].dia_horario;
                this.horario2[j].horario_ordenado[4].hora_horario=this.horario[i].hora_horario;
              }
            }  


          }
        }
      console.log(this.horario2);
      this.dataSource = new MatTableDataSource<Horario2>(this.horario2); 

         })
        }

        

  }
