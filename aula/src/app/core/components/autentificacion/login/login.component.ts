import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  
  constructor(private dialogRef: MatDialogRef<LoginComponent>, 
    private snackbar: MatSnackBar, 
    private loginService: LoginService, private dialog: MatDialog,
    private router: Router
    ) {
  }
  
  ngOnInit(): void {  
    console.log('HOLAA')
  }

  
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.maxLength(100)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });


  onSubmit() {

    let txtemail = this.formLogin.value.email ?? '';
    let txtcontrasena = this.formLogin.value.contrasena ?? ''; 
    

    if (this.loginService.login(txtemail, txtcontrasena)) {

      this.dialogRef.close();
      this.router.navigate(['/usuario']);

    } else {

      this.snackbar.open('Usuario o contraseña incorrecta.', 'OK', { duration: 5000 });

    }
      
  }  

  registroUsuario(){

    this.dialog.open(RegistroUsuarioComponent ,{ disableClose: true, width: '500px' });

  }

  cancelar() {
    this.dialogRef.close();
  }

}
