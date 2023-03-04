import { Component, Input } from '@angular/core';
import { ActividadModel } from 'src/app/modules/docente/models/actividadModel';

@Component({
  selector: 'app-borrar-actividad-modal',
  templateUrl: './borrar-actividad-modal.component.html',
  styleUrls: ['./borrar-actividad-modal.component.css']
})
export class BorrarActividadModalComponent {
  @Input() public actividad!: ActividadModel;


}
