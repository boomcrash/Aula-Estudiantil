import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante.component';
import { ActaComponent } from './pages/acta/acta.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EperfilComponent } from './pages/eperfil/eperfil.component';
import { EvaluacionDocenteComponent } from './pages/evaluacion-docente/evaluacion-docente.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { MateriaComponent } from './pages/materia/materia.component';


const routes: Routes = [
  { 
    path: '', 
    component: EstudianteComponent
  },
  { 
    path: 'acta-calificaciones', 
    component: ActaComponent
  },
  { 
    path: 'perfil', 
    component: EperfilComponent
  },
  { 
    path: 'cursos',  children: [
      { path: '', component: CursosComponent },
      { path: ':materia', component: MateriaComponent },
    ],
  },
  { 
    path: 'evaluacion-docente', 
    component: EvaluacionDocenteComponent
  },
  { 
    path: 'horario', 
    component: HorarioComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
