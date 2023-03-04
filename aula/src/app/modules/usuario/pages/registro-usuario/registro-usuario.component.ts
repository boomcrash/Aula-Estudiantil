import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {


  firstFormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    conf: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
  });

  comprobarContrasenasIguales(campo1: string, campo2: string) {
    return (formGroup: FormGroup) => {
      const control1 = formGroup.controls[campo1];
      const control2 = formGroup.controls[campo2];

      if (control1.value !== control2.value) {
        control2.setErrors({ noCoinciden: true });
      } else {
        control2.setErrors(null);
      }
    }
  }

  secondFormGroup = this._formBuilder.group({
    ROLES: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder,  private router:Router) {}

volver() {
  this.router.navigate(['/home']);

}

estudiante(){
  console.log("estudiante");
}

docente(){
  console.log("docente"); 
}




}
