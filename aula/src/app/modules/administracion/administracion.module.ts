import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { EstudianteAdministracionComponent } from './pages/estudiante-administracion/estudiante-administracion.component';
import { DocenteAdministracionComponent } from './pages/docente-administracion/docente-administracion.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AdministracionComponent,
    EstudianteAdministracionComponent,
    DocenteAdministracionComponent
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
    MatSelectModule
  ]
})
export class AdministracionModule { }
