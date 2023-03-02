import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioModule } from 'src/app/modules/usuario/usuario.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsuarioModule
  ],
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent
  ],
  providers: [CookieService],
})
export class AutenticacionModule { }
