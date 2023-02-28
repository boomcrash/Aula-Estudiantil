import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActaRoutingModule } from './acta-routing.module';
import { ActaComponent } from './acta.component';


@NgModule({
  declarations: [
    ActaComponent
  ],
  imports: [
    CommonModule,
    ActaRoutingModule
  ]
})
export class ActaModule { }
