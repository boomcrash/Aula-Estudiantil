import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosComponent } from './cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgregarActividadModalComponent } from './actividades/agregar-actividad-modal/agregar-actividad-modal.component';
import { ModificarActividadModalComponent } from './actividades/modificar-actividad-modal/modificar-actividad-modal.component';
import { InformacionActividadModalComponent } from './actividades/informacion-actividad-modal/informacion-actividad-modal.component';
import { BorrarActividadModalComponent } from './actividades/borrar-actividad-modal/borrar-actividad-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ActividadesComponent } from './actividades/actividades.component';


@NgModule({
  declarations: [
    CursosComponent,
    AgregarActividadModalComponent,
    ModificarActividadModalComponent,
    InformacionActividadModalComponent,
    BorrarActividadModalComponent,
    ActividadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,

    
  ],
  providers: [DatePipe],
})
export class CursosModule { }
