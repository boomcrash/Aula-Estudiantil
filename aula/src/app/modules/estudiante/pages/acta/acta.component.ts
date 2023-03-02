import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActaCalificacion } from '../../models/actacalificacion.model';
@Component({
  selector: 'app-acta',
  templateUrl: './acta.component.html',
  styleUrls: ['./acta.component.css']
})
export class ActaComponent implements OnInit {
 
  datos = [
    {id: 1, nombre_materia: "Mate", modulo: 1, paralelo: 2, promedioCalificaciones: 9, promedioAsistencias: 100, estado: "Aprobado"},
    {id: 2, nombre_materia: "Mates", modulo: 1, paralelo: 2, promedioCalificaciones: 5, promedioAsistencias: 100, estado: "Reprobado"},
  ];
  displayedColumns = ['materia', 'modulo', 'paralelo', 'pcalificaciones', 'pasistencias', 'estado'];
  dataSource: any = []; 

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ActaCalificacion>(this.datos); 
  }
  }


  