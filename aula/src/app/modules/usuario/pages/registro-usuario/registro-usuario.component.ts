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
