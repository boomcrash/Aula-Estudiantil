import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<CambiarContrasenaComponent>) {}

  cambiar = new FormGroup({
    contraseña: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    ncontraseña: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    vcontraseña: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
  });


  cancelar() {
    this.dialogRef.close();
  }

  changePassword() {

  /*  if (this.cambiar.value.contraseña === this.data.usuario.password) {
      if (this.cambiar.value.ncontraseña == this.cambiar.value.vcontraseña) {
        this.dataUsuarios.changePassword(this.cambiar.value.ncontraseña ?? '', this.data.usuario.id);
        console.log(this.dataUsuarios.getlistaUsuarios());
        this.dialogRef.close();
        this.snackBar.open('Cambió su contraseña!', 'Cerrar', {
          duration: 2000,
        });

      } else {
        this.snackBar.open('Las contraseñas deben ser iguales!', 'Cerrar', {
          duration: 2000,
        });
      }

    } else {

      this.snackBar.open('Contraseña actual incorrecta', 'Cerrar', {
        duration: 2000,
      });

    }*/


  }

}
