import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { StepperOrientation } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
 
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder,  private router:Router,private snackBar: MatSnackBar, breakpointObserver: BreakpointObserver    ) {

    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

  }
/*ngOnChanges(changes: SimpleChanges): void {
  this.verificar= this.change();
}*/

  firstFormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    conf: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),

    
  });


  


  secondFormGroup = this._formBuilder.group({
    ROLES: ['', Validators.required],
  });
  isEditable = false;


volver() {
  this.router.navigate(['/home']);

}

estudiante(){
  console.log("estudiante");
}

docente(){
  console.log("docente"); 
}




/*change():boolean{
  if (this.firstFormGroup.value.contrasena === this.firstFormGroup.value.conf) {
    this.snackBar.open('Las contraseñas son iguales!', 'Cerrar', {
      duration: 2000,
    });
    return true;
}else{
  this.snackBar.open('Las contraseñas deben ser iguales!', 'Cerrar', {
    duration: 2000,
  });
  return false;


}
}*/

 arePasswordsEqual(): boolean {
  const password = this.firstFormGroup.value.contrasena;
  const confirm = this.firstFormGroup.value.conf;

  // Se validan los valores de password y confirm antes de compararlos
  if (password === null || confirm === null) {
    return true; // Si uno de los campos es null, los campos no son iguales
  } else if (password != confirm) {

    return true; // Si los campos no son iguales, no son iguales
  }

  return false;
}
}

