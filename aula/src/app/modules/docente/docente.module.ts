import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { CursosModule } from './pages/cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursoComponent } from './pages/cursos/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';


@NgModule({
  declarations: [
    DocenteComponent
    
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
  ]
})
export class DocenteModule { }
