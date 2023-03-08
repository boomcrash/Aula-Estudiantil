import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { CursosModule } from './pages/cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursoComponent } from './pages/cursos/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { DperfilComponent } from './pages/dperfil/dperfil.component';
import { DocenteRegistroComponent } from './pages/docente-registro/docente-registro.component';


@NgModule({
  declarations: [
    DocenteComponent,
    DperfilComponent,
    DocenteRegistroComponent
    
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    MatExpansionModule,
    MatTableModule,
  ]
})
export class DocenteModule { }
