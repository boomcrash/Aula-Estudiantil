import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente.component';
import { ActaComponent } from './pages/acta/acta.component';
import { CursoComponent } from './pages/cursos/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HorarioComponent } from './pages/horario/horario.component';


const routes: Routes = [
  { 
    path: '', 
    component: DocenteComponent
  },
  { 
    path: 'acta-calificaciones', 
    component: ActaComponent
  },
  { 
    path: 'cursos',  children: [
      { path: '', component: CursosComponent },
      { path: ':materia', component: CursoComponent },
    ]
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
export class DocenteRoutingModule { }
