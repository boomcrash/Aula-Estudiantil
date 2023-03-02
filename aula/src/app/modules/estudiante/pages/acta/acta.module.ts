import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActaRoutingModule } from './acta-routing.module';
import { ActaComponent } from './acta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ActaRoutingModule,
    SharedModule,
    MatTableModule,
  ]
})
export class ActaModule { }
