import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { EvaluacionDocenteComponent } from './pages/evaluacion-docente/evaluacion-docente.component';


@NgModule({
  declarations: [
    EstudianteComponent,
    EvaluacionDocenteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
