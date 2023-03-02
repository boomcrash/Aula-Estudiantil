import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialsModule } from './angularMaterials/angularMaterials.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  imports: [
    
    AngularMaterialsModule
  ],
  declarations: [
  
  ],
  exports: [
    AngularMaterialsModule, CommonModule
  ],
  providers: [CookieService]
})
export class SharedModule { }
