import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalidadRoutingModule } from './calidad-routing.module';
import { CalidadComponent } from './calidad.component';


@NgModule({
  declarations: [
    CalidadComponent
  ],
  imports: [
    CommonModule,
    CalidadRoutingModule
  ]
})
export class CalidadModule { }
