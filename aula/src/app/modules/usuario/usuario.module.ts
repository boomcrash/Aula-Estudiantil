import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { AngularMaterialsModule } from 'src/app/shared/angularMaterials/angularMaterials.module';
import { CambiarContrasenaComponent } from './pages/cambiar-contrasena/cambiar-contrasena.component';


@NgModule({
  declarations: [
    MiCuentaComponent,
    RegistroUsuarioComponent,
    CambiarContrasenaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AngularMaterialsModule,
  ]
})
export class UsuarioModule { }
