import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialsModule } from './angularMaterials/angularMaterials.module';


@NgModule({
  imports: [
    
    AngularMaterialsModule
  ],
  declarations: [
  
  ],
  exports: [
    AngularMaterialsModule, CommonModule
  ]
})
export class SharedModule { }
