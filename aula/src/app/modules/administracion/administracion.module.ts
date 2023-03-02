import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { EstudianteAdministracionComponent } from './pages/estudiante-administracion/estudiante-administracion.component';
import { DocenteAdministracionComponent } from './pages/docente-administracion/docente-administracion.component';


@NgModule({
  declarations: [
    AdministracionComponent,
    EstudianteAdministracionComponent,
    DocenteAdministracionComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
