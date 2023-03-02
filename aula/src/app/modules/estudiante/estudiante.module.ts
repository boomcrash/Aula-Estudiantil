import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { EvaluacionDocenteComponent } from './pages/evaluacion-docente/evaluacion-docente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HorarioComponent } from './pages/horario/horario.component';


@NgModule({
  declarations: [
    EstudianteComponent,
    EvaluacionDocenteComponent,
    HorarioComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule
  ]
})
export class EstudianteModule { }
