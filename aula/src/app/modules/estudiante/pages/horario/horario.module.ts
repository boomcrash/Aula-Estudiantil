import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { HorarioComponent } from './horario.component';


@NgModule({
  declarations: [
    HorarioComponent
  ],
  imports: [
    CommonModule,
    HorarioRoutingModule
  ]
})
export class HorarioModule { }
