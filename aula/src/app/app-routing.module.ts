import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'estudiante', loadChildren: () => import('./modules/estudiante/estudiante.module').then((m) => m.EstudianteModule), },
  { path: 'docente', loadChildren: () => import('./modules/docente/docente.module').then((m) => m.DocenteModule), },
  { path: 'calidad', loadChildren: () => import('./modules/calidad/calidad.module').then((m) => m.CalidadModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
