import { Component } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import{Horario} from '../../models/Horario.model';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {

  datos = [
    {materia:"Base de datos", modulo:"2",paralelo:"2-3", docente:"Valeria María Loor López", hora1: "12:00-14:00", hora2: "", hora3: "19:00 - 21:00", hora4: "", hora5: "", hora6: "12:00 -17:00", hora7: ""},
    {materia:"Base de datos", modulo:"2",paralelo:"2-3", docente:"Martha Lourdes Andrede Solorzano", hora1: "12:00-15.00", hora2: "18:00-20:00", hora3: "20:00-21:00", hora4: "", hora5: "12:00-16:00", hora6: "", hora7: ""},
    {materia:"Base de datos", modulo:"2",paralelo:"2-3", docente:"Martha Lourdes Andrede Solorzano", hora1: "12:00-15.00", hora2: "18:00-20:00", hora3: "20:00-21:00", hora4: "", hora5: "12:00-16:00", hora6: "", hora7: ""}

  ];
  displayedColumns = ['materia', 'modulo', 'paralelo', 'docente', 'hora1', 'hora2', 'hora3', 'hora4', 'hora5', 'hora6', 'hora7'];
  dataSource: any = []; 

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Horario>(this.datos); 
  }

}
