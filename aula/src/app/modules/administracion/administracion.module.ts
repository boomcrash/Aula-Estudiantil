import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { EstudianteAdministracionComponent } from './pages/estudiante-administracion/estudiante-administracion.component';
import { DocenteAdministracionComponent } from './pages/docente-administracion/docente-administracion.component';
import { ContratoDocenteAdministracionComponent } from './pages/contrato-docente-administracion/contrato-docente-administracion.component';
import { PagosDocenteAdministracionComponent } from './pages/pagos-docente-administracion/pagos-docente-administracion.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { VerDocenteAdministracionComponent } from './pages/ver-docente-administracion/ver-docente-administracion.component';
import { EvaluacionDocenteAdministracionComponent } from './pages/evaluacion-docente-administracion/evaluacion-docente-administracion.component';


@NgModule({
  declarations: [
    AdministracionComponent,
    EstudianteAdministracionComponent,
    DocenteAdministracionComponent,
    ContratoDocenteAdministracionComponent,
    PagosDocenteAdministracionComponent,
    VerDocenteAdministracionComponent,
    EvaluacionDocenteAdministracionComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class AdministracionModule { }
