import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionDocenteRoutingModule } from './evaluacion-docente-routing.module';
import { MatTableModule} from '@angular/material/table';
import { MatRadioChange } from '@angular/material/radio';



 
 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EvaluacionDocenteRoutingModule,
    MatTableModule,
  ]
})





export class EvaluacionDocenteModule {

  criterio1:number = 0;
  criterio2:number = 0;
  criterio3:number = 0;
  criterio4:number = 0;
  criterio5:number = 0;
  criterio6:number = 0;
  criterio7:number = 0;
  criterio8:number = 0;
  criterio9:number = 0;
  criterio10: number = 0;
  resultado: number = 0;

   promedio() {
    this.resultado = (this.criterio1+this.criterio2+this.criterio3+this.criterio4+this.criterio5+this.criterio6+this.criterio7+this.criterio8+this.criterio9+this.criterio10)/10;
    console.log(this.resultado);

  }

 

}

