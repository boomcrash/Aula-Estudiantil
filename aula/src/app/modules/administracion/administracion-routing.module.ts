import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { DocenteAdministracionComponent } from './pages/docente-administracion/docente-administracion.component';
import { EstudianteAdministracionComponent } from './pages/estudiante-administracion/estudiante-administracion.component';


const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent
  },
  {
    path: 'administracion',
    component: AdministracionComponent
  },
  { 
    path: 'docente-administracion', 
    component: DocenteAdministracionComponent,
    // canActivate: [LoginGuardian]
  },
  { 
    path: 'estudiante-administracion', 
    component: EstudianteAdministracionComponent,
    // canActivate: [LoginGuardian]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
