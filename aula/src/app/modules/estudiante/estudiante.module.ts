import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { EvaluacionDocenteComponent } from './pages/evaluacion-docente/evaluacion-docente.component';
import { EvaluacionDocenteRoutingModule } from './pages/evaluacion-docente/evaluacion-docente-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActaComponent } from './pages/acta/acta.component';
import { EperfilComponent } from './pages/eperfil/eperfil.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { MateriaComponent } from './pages/materia/materia.component';
@NgModule({
  declarations: [
    EstudianteComponent,
    EvaluacionDocenteComponent,
    ActaComponent,
    EperfilComponent,
    CursosComponent,
    MateriaComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    EvaluacionDocenteRoutingModule,
    MatExpansionModule,
    MatTableModule,
    SharedModule,
  ]
})
export class EstudianteModule { }
