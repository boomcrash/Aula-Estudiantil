import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosComponent } from './cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoComponent } from './curso/curso.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgregarActividadModalComponent } from './agregar-actividad-modal/agregar-actividad-modal.component';
import { ModificarActividadModalComponent } from './modificar-actividad-modal/modificar-actividad-modal.component';
import { InformacionActividadModalComponent } from './informacion-actividad-modal/informacion-actividad-modal.component';
import { BorrarActividadModalComponent } from './borrar-actividad-modal/borrar-actividad-modal.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoComponent,
    AgregarActividadModalComponent,
    ModificarActividadModalComponent,
    InformacionActividadModalComponent,
    BorrarActividadModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule

    
  ]
})
export class CursosModule { }
