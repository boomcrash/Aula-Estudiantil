import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';


@NgModule({
  declarations: [
    MiCuentaComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
