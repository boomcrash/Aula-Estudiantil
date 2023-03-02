import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DatosUser } from 'src/app/core/interfaces/datosSimplesUser.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginService } from 'src/app/core/services/login.service';
import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  datosUsuario: DatosUser[] = [];
  user = this.cookie.get('username');
  
  constructor(private dialogRef: MatDialogRef<LoginComponent>, 
    private snackbar: MatSnackBar, 
    private loginService: LoginService, private dialog: MatDialog,  
    private autenticar: AuthService,
    private cookie: CookieService
    ) {
  }
  
  ngOnInit(): void {  
    console.log('HOLAA')
  }

  
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.maxLength(100)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });


  async onSubmit() {

    let txtemail = this.formLogin.value.email ?? '';
    let txtcontrasena = this.formLogin.value.contrasena ?? ''; 
    

    if (await this.loginService.login(txtemail, txtcontrasena)) {      
      await this.autenticar.obtenerDatosSimplesUsuario(txtemail).toPromise().then( resp =>{
        this.datosUsuario = resp.data;                 
        this.cookie.set('rol', this.datosUsuario[0].rol_usuario.toString());
        this.cookie.set('id', this.datosUsuario[0].id_usuario.toString());
        console.log(this.cookie.get('rol'))
      });    
      this.dialogRef.close();      
      window.open('/usuario', '_self');
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
