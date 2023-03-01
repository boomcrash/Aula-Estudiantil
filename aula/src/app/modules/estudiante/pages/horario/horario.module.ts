import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { HorarioRoutingModule } from './horario-routing.module';
import { HorarioComponent } from './horario.component';


@NgModule({
  declarations: [
    HorarioComponent
  ],
  imports: [
    CommonModule,
    HorarioRoutingModule,
    MatRadioModule,

  ]
})
export class HorarioModule { }
