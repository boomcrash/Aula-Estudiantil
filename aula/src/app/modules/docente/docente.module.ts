import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HorarioModule } from './pages/horario/horario.module';
import { HorarioComponent } from './pages/horario/horario.component';



@NgModule({
  declarations: [
    DocenteComponent,
    HorarioComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    SharedModule,
    HorarioModule
  ]
})
export class DocenteModule { }
